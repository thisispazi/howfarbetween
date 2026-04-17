'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'white',
      borderTop: '1px solid #e2e8f0',
      padding: '20px 24px',
      zIndex: 9999,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: 1, minWidth: '200px' }}>
        <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
          <strong style={{ color: '#0f172a' }}>We value your privacy.</strong>{' '}
          We use cookies to enhance your browsing experience and display personalised ads.
          By clicking "Accept", you consent to our use of cookies.{' '}
          <a href="/privacy" style={{ color: '#0f172a', fontWeight: '600' }}>Privacy Policy</a>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={reject}
          style={{
            padding: '10px 20px',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            background: 'white',
            color: '#64748b',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Reject All
        </button>
        <button
          onClick={accept}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            background: '#0f172a',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}