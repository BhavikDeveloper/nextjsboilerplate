import Head from "next/head"
import { useRouter } from "next/router"
import Script from "next/script"
import React, { Fragment, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/globalStyles"
import styledComponentDefaultTheme from "../styles/siteTheme"
import { handleUserDataInQueryParams } from "../utils/handleQueryParams"
export const ThemeContext = React.createContext({})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // states
  const [themeData, setThemeData] = useState(styledComponentDefaultTheme)
  // useLayoutEffect to update user data from query params
  useEffect(() => {
    // Extract encrypted user data from url
    handleUserDataInQueryParams()
  }, [])

  useEffect(() => {
    const query = router.query
    if (
      query &&
      Object.keys(query).length > 0 &&
      (Object.prototype.hasOwnProperty.call(query, "ffth") ||
        Object.prototype.hasOwnProperty.call(query, "ffu"))
    ) {
      if (!Object.prototype.hasOwnProperty.call(query, "BlogDetail")) {
        router.replace(router.route)
      }
    }
  }, [router])

  return (
    <Fragment>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        {/* link manifest.json */}
        <link rel="manifest" href="manifest.json" />
        {/* <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            strategy="lazyOnload"
          />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            strategy="lazyOnload"
          /> */}
        {/* <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
            strategy="lazyOnload"
          /> */}
        <Script
          src="../assets/vender/bootstrap/js/bootstrap.min.js"
          strategy="lazyOnload"
        />
        {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          /> */}

        <link
          rel="stylesheet"
          href="../assets/vender/bootstrap/css/bootstrap.min.css"
        />

        {/* TrustBox script */}
        {/* <script
            type="text/javascript"
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          /> */}

        <script
          type="text/javascript"
          src="../assets/vender/tp.widget.bootstrap.min.js"
        />

        {/* Font awesome */}
        <link
          rel="stylesheet"
          href="../assets/vender/fontawesome/css/all.min.css"
        />
      </Head>

      <ThemeContext.Provider
        value={{
          ...themeData,
        }}
      >
        <ThemeProvider theme={themeData}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Fragment>
  )
}

export default MyApp
