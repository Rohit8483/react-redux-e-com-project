// import React from "react";
// import Button from 'react-bootstrap/Button';
// import { useDispatch, useSelector } from "react-redux";
// import {clearCart} from "../actions/action";

// const Header = () => {
//   const dispatch=useDispatch();
//   const cartCount = useSelector((state) => state.count.cartCount);

//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>Shop by using react redux my cartttttt count is {cartCount} </h2>
//       </div>
      
//       {/* <button onClick={()=>dispatch(clearCart())}>Clear all cart items</button> */}
//       <Button variant="primary" onClick={()=>dispatch(clearCart())}>Clear all cart items</Button>
//     </div>
//   );
// };

// export default Header;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to='/' style={{textDecoration:'none'}}>
        <Navbar.Brand href="#">React-Redux-ECOM</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;