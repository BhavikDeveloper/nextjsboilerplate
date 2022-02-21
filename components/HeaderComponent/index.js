import React from "react";
import { Container, Navbar } from "react-bootstrap";

import * as s from "./index.style";
const HeaderComponent = () => {
  // Redux Store

  return (
    <>
      <s.HeaderComponentWrapper isColorChange>
        <Navbar expand="lg" fixed="top" className="react-bootstrap-nav">
          <Container fluid>Header</Container>
        </Navbar>
      </s.HeaderComponentWrapper>
    </>
  );
};
export default HeaderComponent;
