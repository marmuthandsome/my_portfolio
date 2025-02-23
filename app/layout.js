import './globals.css'

export const metadata = {
  title: 'Ferry Nurqadar - Portfolio',
  description: 'Cybersecurity Portfolio of Ferry Nurqadar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
