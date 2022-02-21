import Head from "next/head"
import Router from "next/router"
import React from "react"
import styled from "styled-components"
import InlineSVG from "svg-inline-react"

import { ffLogoWhiteSvg } from "../assets/svgs/allSvgOfPage"
import HeaderComponent from "../components/HeaderComponent"

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const HeaderLogoMainDiv = styled.div`
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
  }
`

const Error = () => (
  <>
    <HeaderComponent
      isNotificationAvl={false}
      pathName={"/"}
      isHeaderSearchAvail
    />
    <FlexCenter>
      <Head>
        <title>404 | Feetfinder Error</title>
      </Head>
      <HeaderLogoMainDiv>
        <InlineSVG src={ffLogoWhiteSvg} className="  ff_header_logo" />
      </HeaderLogoMainDiv>
      <div style={{ textAlign: "center" }}>
        <h1>404</h1>
        <h2>UH OH! You are lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <button
          onClick={() => Router.push("/")}
          className="ff_btn_purple"
          type="button"
        >
          Home
        </button>
      </div>
    </FlexCenter>
  </>
)

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//   return { statusCode }
// }

export default Error
