import React from 'react';
// import Nav from 'react/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class Header extends React.Component
{
  render()
  {
    return(
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
            {/* <Nav></Nav> */}
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header
