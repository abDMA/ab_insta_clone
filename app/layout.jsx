import '@/styles/globals.css'
import 'normalize.css'; // Note this
import firebaseConfig from './firebase'
import { RecoilProvider } from '@/components/constant'
import { AuthProvider } from '@/components/constant'
import { SkeletonTheme } from 'react-loading-skeleton'




export const metadata = {
  title: 'Instagram Clone',
  description: 'Generated by Ab',
}

export default  function RootLayout({ children ,session }) {

  return (
    <html lang="en">
       <head>
      <link rel="icon" href="/insta.svg" sizes="any" />
      </head>
      
      <body >
        <div className='bg-gray-50 '>
          <AuthProvider session={session}>
            <RecoilProvider>
            {children}
            </RecoilProvider>
          </AuthProvider>
        </div>
       
      
      </body>
      
    </html>
  )
}
