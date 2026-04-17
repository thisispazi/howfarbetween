'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CITIES, getDistanceKm, formatDuration, getTravelTimes, crossesOcean } from './lib/cities'

export default function HomePage() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [fromQuery, setFromQuery] = useState('')
  const [toQuery, setToQuery] = useState('')
  const [showFromList, setShowFromList] = useState(false)
  const [showToList, setShowToList] = useState(false)

  const fromCity = CITIES.find(c => c.slug === from)
  const toCity = CITIES.find(c => c.slug === to)

  const filteredFrom = useMemo(() =>
    CITIES.filter(c =>
      c.name.toLowerCase().includes(fromQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(fromQuery.toLowerCase())
    ).slice(0, 8), [fromQuery])

  const filteredTo = useMemo(() =>
    CITIES.filter(c =>
      c.name.toLowerCase().includes(toQuery.toLowerCase()) ||
      c.country.toLowerCase().includes(toQuery.toLowerCase())
    ).slice(0, 8), [toQuery])

  const distance = fromCity && toCity
    ? getDistanceKm(fromCity.lat, fromCity.lon, toCity.lat, toCity.lon)
    : null

  const oceaCross = fromCity && toCity ? crossesOcean(fromCity.continent, toCity.continent) : false
  const times = distance ? getTravelTimes(distance, oceaCross) : null

  const POPULAR_PAIRS = [
    { from: 'london', to: 'new-york' },
    { from: 'dubai', to: 'mumbai' },
    { from: 'london', to: 'dubai' },
    { from: 'new-york', to: 'los-angeles' },
    { from: 'paris', to: 'london' },
    { from: 'sydney', to: 'london' },
    { from: 'singapore', to: 'london' },
    { from: 'dubai', to: 'karachi' },
    { from: 'toronto', to: 'new-york' },
    { from: 'berlin', to: 'paris' },
    { from: 'tokyo', to: 'seoul' },
    { from: 'bangkok', to: 'singapore' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* HEADER */}
      <header style={{ background: '#0f172a', color: 'white', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px' }}>
              📍 HowFarBetween
            </span>
          </Link>
          <span style={{ fontSize: '13px', opacity: 0.6 }}>Distance Calculator</span>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', color: 'white', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '12px', letterSpacing: '-1px' }}>
            How Far Between Any Two Cities?
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.75, marginBottom: '48px' }}>
            Distance, flight time, driving time and more — instantly
          </p>

          {/* SEARCH BOX */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '680px',
            margin: '0 auto',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            color: '#1e293b'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '16px', alignItems: 'start', marginBottom: '24px' }}>
              {/* FROM */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>From</label>
                <input
                  type="text"
                  placeholder="City or country..."
                  value={fromQuery}
                  onChange={e => { setFromQuery(e.target.value); setShowFromList(true); setFrom('') }}
                  onFocus={() => setShowFromList(true)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '15px',
                    outline: 'none',
                    background: '#f8fafc'
                  }}
                />
                {showFromList && fromQuery.length > 0 && filteredFrom.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    zIndex: 100,
                    marginTop: '4px',
                    overflow: 'hidden'
                  }}>
                    {filteredFrom.map(city => (
                      <div
                        key={city.slug}
                        onClick={() => { setFrom(city.slug); setFromQuery(city.name + ', ' + city.country); setShowFromList(false) }}
                        style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                      >
                        <strong>{city.name}</strong> <span style={{ color: '#94a3b8' }}>{city.country}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ARROW */}
              <div style={{ paddingTop: '28px', fontSize: '24px', color: '#94a3b8' }}>→</div>

              {/* TO */}
              <div style={{ position: 'relative' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>To</label>
                <input
                  type="text"
                  placeholder="City or country..."
                  value={toQuery}
                  onChange={e => { setToQuery(e.target.value); setShowToList(true); setTo('') }}
                  onFocus={() => setShowToList(true)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '15px',
                    outline: 'none',
                    background: '#f8fafc'
                  }}
                />
                {showToList && toQuery.length > 0 && filteredTo.length > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    zIndex: 100,
                    marginTop: '4px',
                    overflow: 'hidden'
                  }}>
                    {filteredTo.map(city => (
                      <div
                        key={city.slug}
                        onClick={() => { setTo(city.slug); setToQuery(city.name + ', ' + city.country); setShowToList(false) }}
                        style={{ padding: '10px 16px', cursor: 'pointer', fontSize: '14px', borderBottom: '1px solid #f1f5f9' }}
                        onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'white')}
                      >
                        <strong>{city.name}</strong> <span style={{ color: '#94a3b8' }}>{city.country}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RESULT */}
            {distance && times && fromCity && toCity && (
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
                {/* ANIMATED PATH */}
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <svg width="100%" height="60" viewBox="0 0 400 60">
                    <circle cx="20" cy="30" r="5" fill="#0f172a" />
                    <path
                      d="M 25 30 Q 200 5 375 30"
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      className="flight-path"
                    />
                    <text x="200" y="22" textAnchor="middle" fontSize="16">✈️</text>
                    <circle cx="380" cy="30" r="5" fill="#0f172a" />
                    <text x="20" y="52" textAnchor="middle" fontSize="11" fill="#64748b">{fromCity.name}</text>
                    <text x="380" y="52" textAnchor="middle" fontSize="11" fill="#64748b">{toCity.name}</text>
                  </svg>
                </div>

                <div style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '4px', textAlign: 'center' }}>
                  {Math.round(distance).toLocaleString()} km
                </div>
                <div style={{ color: '#64748b', fontSize: '15px', marginBottom: '20px', textAlign: 'center' }}>
                  {Math.round(distance * 0.621371).toLocaleString()} miles
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
                  {[
                    { icon: '✈️', label: 'Flight', value: formatDuration(times.flying) },
                    { icon: '🚗', label: 'Driving', value: formatDuration(times.driving) },
                    { icon: oceaCross ? '🚶🏊' : '🚶', label: oceaCross ? 'Walk+Swim' : 'Walking', value: formatDuration(times.walkSwim) },
                    ...(oceaCross ? [{ icon: '🚢', label: 'Ship', value: formatDuration(times.ship) }] : []),
                  ].map(item => (
                    <div key={item.label} style={{ background: 'white', borderRadius: '10px', padding: '14px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '20px', marginBottom: '4px' }}>{item.icon}</div>
                      <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                  <Link
                    href={`/distance/${fromCity.slug}-to-${toCity.slug}`}
                    style={{
                      display: 'inline-block',
                      background: '#0f172a',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    View full details →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* POPULAR PAIRS */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>Popular Distances</h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '40px' }}>Most searched city pairs</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {POPULAR_PAIRS.map(pair => {
              const fromC = CITIES.find(c => c.slug === pair.from)
              const toC = CITIES.find(c => c.slug === pair.to)
              if (!fromC || !toC) return null
              const dist = Math.round(getDistanceKm(fromC.lat, fromC.lon, toC.lat, toC.lon))
              return (
                <Link
                  key={`${pair.from}-${pair.to}`}
                  href={`/distance/${pair.from}-to-${pair.to}`}
                  style={{
                    display: 'block',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '20px',
                    textDecoration: 'none',
                    color: '#1e293b',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>
                    {fromC.name} → {toC.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>
                    {fromC.country} → {toC.country}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
                    {dist.toLocaleString()} km
                  </div>
                </Link>
              )
            })}
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
            Distances calculated using the Haversine formula · Travel times are estimates
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', fontSize: '13px' }}>
            <Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/legal" style={{ color: '#94a3b8', textDecoration: 'none' }}>Legal Notice</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}