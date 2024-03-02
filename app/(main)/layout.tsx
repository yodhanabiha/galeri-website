import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from '../components/Sidebar/sidebar';
import { Providers } from '@/lib/providers';
import { NavBar } from '../components/Navbar/navbar';
import { Body } from '../components/Body/body';
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body style={{padding:'0px'}}>
          <NavBar />
          <Sidebar />
          <Body children={children}/>
        </body>
      </html>
    </Providers>

  )
}
