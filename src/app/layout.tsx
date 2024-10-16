import "./globals.css"


export const metadata = {
  title: 'Porsche 911 ',
  description: 'Porsche 911 turbo 50 Years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <header>



        </header>
        
        
        {children}
        
        
        </body>
    </html>
  )
}
