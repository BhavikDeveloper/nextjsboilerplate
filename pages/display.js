import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import HeaderComponent from "../components/HeaderComponent"
import MetaSEO from "../components/SeoComponent"
import ThemeComponent from "../components/ThemeComponent"
import * as s from "../styles/styledComponent/pages/display.style"

const DisplaySiteTheme = () => {
  return (
    <s.displayMainDiv>
      <MetaSEO />
      <HeaderComponent currentPage={11} isNotificationAvl isUserIconAvl />
      <s.displayWrapper>
        <Container fluid>
          <Row>
            <Col lg={10}>
              <ThemeComponent />
            </Col>
          </Row>
        </Container>
      </s.displayWrapper>
    </s.displayMainDiv>
  )
}
DisplaySiteTheme.getInitialProps = async ({ pathname }) => ({ pathname })

export default DisplaySiteTheme
