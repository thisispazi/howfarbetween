import Link from 'next/link'

export const metadata = {
  title: 'Legal Notice | HowFarBetween.com',
}

export default function ImpressumPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <header style={{ background: '#0f172a', color: 'white', padding: '16px 0' }}>
        <div className="container">
          <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: '800' }}>
            📍 HowFarBetween
          </Link>
        </div>
      </header>
      <main className="container" style={{ maxWidth: '800px', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Legal Notice</h1>
        <p style={{ color: '#64748b', marginBottom: '40px' }}>Information according to § 5 ECG</p>
        {[
          { title: 'Operator', content: 'iQoon e.U.\nPatrick Reiter\nGartengasse 26\n2630 Ternitz\nAustria' },
          { title: 'Contact', content: 'Email: hello@howfarbetween.com' },
          { title: 'Purpose', content: 'Operation of a free online distance calculator providing travel distance and time estimates between world cities.' },
          { title: 'Disclaimer', content: 'All distances and travel times are estimates calculated using the Haversine formula and average speed assumptions. We accept no liability for decisions made based on this information.' },
          { title: 'Copyright', content: 'All content on this website is protected by copyright. Reproduction requires written consent of the operator.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{s.title}</h2>
            <p style={{ color: '#475569', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{s.content}</p>
          </div>
        ))}
      </main>
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '32px 0', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>← Back to HowFarBetween.com</Link>
        <Link href="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</Link>
      </footer>
    </div>
  )
}