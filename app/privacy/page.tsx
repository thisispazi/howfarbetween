import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | HowFarBetween.com',
}

export default function PrivacyPage() {
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
        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', marginBottom: '40px' }}>Last updated: April 2026</p>
        {[
          { title: '1. Operator', content: 'HowFarBetween.com is operated by iQoon e.U., Patrick Reiter, Gartengasse 26, 2630 Ternitz, Austria. Contact: hello@howfarbetween.com' },
          { title: '2. Data We Collect', content: 'We do not collect personal data. Standard server logs may contain IP addresses for security purposes and are deleted after 7 days. All distance calculations happen locally in your browser — no queries are stored or logged.' },
          { title: '3. Cookies & Advertising', content: 'We use Google AdSense to display advertisements. Google may use cookies to serve personalized ads. You can manage cookie preferences via the banner on your first visit. You can opt out at google.com/settings/ads.' },
          { title: '4. Your Rights (GDPR)', content: 'You have the right to access, correct, or delete any personal data. Contact: hello@howfarbetween.com' },
          { title: '5. Changes', content: 'We may update this policy from time to time. Continued use constitutes acceptance.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{s.title}</h2>
            <p style={{ color: '#475569', lineHeight: '1.7' }}>{s.content}</p>
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