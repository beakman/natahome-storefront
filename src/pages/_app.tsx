import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"
import PlausibleProvider from "next-plausible"
import { Quattrocento_Sans, Inter } from "@next/font/google"

export const quattrocento_sans = Quattrocento_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-quattrocento',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <PlausibleProvider
      domain="woodstore.com"
      customDomain="https://analytics.psalido.net"
      selfHosted
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default App
