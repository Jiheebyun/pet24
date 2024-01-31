import Login from "./login/page"





export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
    
  }