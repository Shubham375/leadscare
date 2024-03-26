import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';
import  Navbar  from '@/components/Navbar';
import { HomeProvider } from '@/redux/context/HomeContext';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-[#e6f3ff] via-[#fbedf6] to-[#ffe9fe]'>
        <header className='bg-[#ffffff7d] backdrop-blur-sm fixed top-0 left-0'>
        <Navbar/>
        </header>
        <HomeProvider>
          {children}
        </HomeProvider>
        </body>
    </html>
  )
}