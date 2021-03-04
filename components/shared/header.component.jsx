/** Dependencies */
import React, { useState } from 'react';

/** Components */
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Link from './bs-navlink.component';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand href="/" className="port-navbar-brand">
          LENA RO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <Link href="/" text="Home" className="port-navbar-item" />
            <Link href="/about" text="About" className="port-navbar-item" />
            <Link href="/portfolios" text="Portfolio" className="port-navbar-item" />
            <Link href="/blogs" text="Blog" className="port-navbar-item" />
            <Link href="/cv" text="CV" className="port-navbar-item" />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
