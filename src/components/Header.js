import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <Navbar />
      <Jumbotron className="jumbo mb-0">
        {/* <div className="header_text">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div> */}
      </Jumbotron>
    </header>
  );
};

export default Header;
