import Link from 'next/link'

export const metadata = {
  title: 'About | HowFarBetween.com',
  description: 'About HowFarBetween.com — free distance calculator between any two cities worldwide.',
}

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <header style={{ background: '#0f172a', color: 'white', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ fontSize: '20px', fontWeight: '800' }}>📍 HowFarBetween</span>
          </Link>
        </div>
      </header>
      <main className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '24px' }}>About HowFarBetween.com</h1>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
          HowFarBetween.com is a free online distance calculator that tells you how far it is between any two cities in the world. Whether you want to know the flight time, driving time, or even how long it would take to walk — we have you covered.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
          All distances are calculated using the Haversine formula, which computes the shortest path between two points on the surface of the Earth. Travel times are estimates based on average speeds for each mode of transport. For intercontinental routes, we also show ship travel time and the famously impractical walking-and-swimming route.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
          HowFarBetween.com is operated by iQoon e.U., based in Austria. We built this tool because we wanted a fast, clean, and honest distance calculator — no ads cluttering the results, no sign-up walls, just the information you need.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569' }}>
          For questions or feedback, reach us at <a href="mailto:hello@howfarbetween.com" style={{ color: '#0f172a', fontWeight: '600' }}>hello@howfarbetween.com</a>
        </p>
      </main>
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '16px', fontSize: '15px' }}>
            <strong style={{ color: 'white' }}>HowFarBetween.com</strong> — Free distance calculator
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