import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CITIES, getDistanceKm, getTravelTimes, formatDuration, crossesOcean, getCityBySlug, getNearbyCities } from '../../lib/cities'

export async function generateMetadata({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params
  const parts = route.split('-to-')
  if (parts.length < 2) return {}
  const fromSlug = parts[0]
  const toSlug = parts.slice(1).join('-to-')
  const fromCity = getCityBySlug(fromSlug)
  const toCity = getCityBySlug(toSlug)
  if (!fromCity || !toCity) return {}
  const dist = Math.round(getDistanceKm(fromCity.lat, fromCity.lon, toCity.lat, toCity.lon))
  return {
    title: `Distance from ${fromCity.name} to ${toCity.name} — ${dist.toLocaleString()} km`,
    description: `How far is it from ${fromCity.name} to ${toCity.name}? The distance is ${dist.toLocaleString()} km (${Math.round(dist * 0.621371).toLocaleString()} miles). Flight time, driving time and more.`,
  }
}

export default async function DistancePage({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params
  const parts = route.split('-to-')
  if (parts.length < 2) return notFound()
  const fromSlug = parts[0]
  const toSlug = parts.slice(1).join('-to-')
  const fromCity = getCityBySlug(fromSlug)
  const toCity = getCityBySlug(toSlug)
  if (!fromCity || !toCity) return notFound()

  const distKm = getDistanceKm(fromCity.lat, fromCity.lon, toCity.lat, toCity.lon)
  const distMiles = distKm * 0.621371
  const oceanCross = crossesOcean(fromCity.continent, toCity.continent)
  const times = getTravelTimes(distKm, oceanCross)
  const nearbyCitiesFrom = getNearbyCities(fromCity, 5)
  const nearbyCitiesTo = getNearbyCities(toCity, 5)

  const fuelLiters = Math.round((distKm / 100) * 7)

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* HEADER */}
      <header style={{ background: '#0f172a', color: 'white', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ fontSize: '20px', fontWeight: '800' }}>📍 HowFarBetween</span>
          </Link>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '13px' }}>← New search</Link>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '14px', opacity: 0.6, marginBottom: '8px' }}>
            {fromCity.country} → {toCity.country}
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '32px', letterSpacing: '-1px' }}>
            {fromCity.name} to {toCity.name}
          </h1>

          {/* ANIMATED SVG PATH */}
          <div style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
            <svg width="100%" height="80" viewBox="0 0 500 80" style={{ overflow: 'visible' }}>
              <circle cx="30" cy="50" r="8" fill="white" opacity="0.9" />
              <path
                d="M 42 50 Q 250 10 458 50"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="10 5"
                opacity="0.6"
                className="flight-path"
              />
              <text x="250" y="28" textAnchor="middle" fontSize="20">✈️</text>
              <circle cx="470" cy="50" r="8" fill="white" opacity="0.9" />
              <text x="30" y="72" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)">{fromCity.name}</text>
              <text x="470" y="72" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.7)">{toCity.name}</text>
            </svg>
          </div>

          {/* DISTANCE */}
          <div style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '420px',
            margin: '0 auto'
          }}>
            <div style={{ fontSize: '52px', fontWeight: '800', letterSpacing: '-2px', lineHeight: '1' }}>
              {Math.round(distKm).toLocaleString()}
            </div>
            <div style={{ fontSize: '20px', opacity: 0.8, marginBottom: '8px' }}>kilometers</div>
            <div style={{ fontSize: '18px', opacity: 0.6 }}>
              {Math.round(distMiles).toLocaleString()} miles
            </div>
            {oceanCross && (
              <div style={{ marginTop: '12px', fontSize: '13px', opacity: 0.6, background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '20px', display: 'inline-block' }}>
                🌊 Crosses ocean
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRAVEL TIMES */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>
            Travel Times from {fromCity.name} to {toCity.name}
          </h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>
            Estimated travel durations
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                icon: '✈️',
                mode: 'By Plane',
                time: formatDuration(times.flying),
                detail: 'Direct flight estimate',
                show: true
              },
              {
                icon: '🚗',
                mode: 'By Car',
                time: formatDuration(times.driving),
                detail: `~${fuelLiters}L fuel at 7L/100km`,
                show: true
              },
              {
                icon: oceanCross ? '🚶🏊' : '🚶',
                mode: oceanCross ? 'Walk + Swim' : 'Walking',
                time: formatDuration(times.walkSwim),
                detail: oceanCross ? 'Land + ocean crossing' : 'At 5 km/h average',
                show: true
              },
              {
                icon: '🚢',
                mode: 'By Ship',
                time: formatDuration(times.ship),
                detail: 'Cargo ship at 35 km/h',
                show: oceanCross
              },
            ].filter(t => t.show).map(t => (
              <div key={t.mode} style={{
                background: 'white',
                borderRadius: '14px',
                padding: '24px',
                textAlign: 'center',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{t.icon}</div>
                <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '6px' }}>{t.mode}</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{t.time}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 0 64px', background: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '32px', paddingTop: '64px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: `How far is it from ${fromCity.name} to ${toCity.name}?`,
              a: `The straight-line distance from ${fromCity.name} to ${toCity.name} is ${Math.round(distKm).toLocaleString()} kilometers (${Math.round(distMiles).toLocaleString()} miles). This is the crow-flies distance calculated using the Haversine formula.`
            },
            {
              q: `How long does it take to fly from ${fromCity.name} to ${toCity.name}?`,
              a: `A direct flight from ${fromCity.name} to ${toCity.name} takes approximately ${formatDuration(times.flying)}. This is an estimate based on an average cruising speed of 800 km/h and does not include boarding, taxiing or layover time.`
            },
            {
              q: `How long does it take to drive from ${fromCity.name} to ${toCity.name}?`,
              a: `Driving from ${fromCity.name} to ${toCity.name} would take approximately ${formatDuration(times.driving)} at an average speed of 85 km/h. The actual driving time may vary depending on road conditions, traffic and border crossings.`
            },
            {
              q: `What is the distance from ${fromCity.name} to ${toCity.name} in miles?`,
              a: `The distance from ${fromCity.name} to ${toCity.name} is ${Math.round(distMiles).toLocaleString()} miles (${Math.round(distKm).toLocaleString()} km) as the crow flies.`
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '16px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: '#1e293b' }}>
                {item.q}
              </h3>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED — FROM THIS CITY */}
      <section style={{ padding: '0 0 64px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
                From {fromCity.name}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {nearbyCitiesFrom.map(city => {
                  const d = Math.round(getDistanceKm(fromCity.lat, fromCity.lon, city.lat, city.lon))
                  return (
                    <Link
                      key={city.slug}
                      href={`/distance/${fromCity.slug}-to-${city.slug}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        color: '#1e293b',
                        fontSize: '14px'
                      }}
                    >
                      <span>{fromCity.name} → <strong>{city.name}</strong></span>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>{d.toLocaleString()} km</span>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>
                To {toCity.name}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {nearbyCitiesTo.map(city => {
                  const d = Math.round(getDistanceKm(city.lat, city.lon, toCity.lat, toCity.lon))
                  return (
                    <Link
                      key={city.slug}
                      href={`/distance/${city.slug}-to-${toCity.slug}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        color: '#1e293b',
                        fontSize: '14px'
                      }}
                    >
                      <span><strong>{city.name}</strong> → {toCity.name}</span>
                      <span style={{ color: '#64748b', fontWeight: '600' }}>{d.toLocaleString()} km</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '16px', fontSize: '15px' }}>
            <strong style={{ color: 'white' }}>HowFarBetween.com</strong> — Free distance calculator
          </p>
          <p style={{ fontSize: '13px', marginBottom: '16px' }}>
            Distances calculated using the Haversine formula · Travel times are estimates only
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', fontSize: '13px' }}>
            <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/legal" style={{ color: '#94a3b8', textDecoration: 'none' }}>Legal Notice</Link>
            <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}