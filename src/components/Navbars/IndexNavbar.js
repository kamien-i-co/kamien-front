/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';

const landingPageScroll = () => document.documentElement.scrollTop > 299
  || document.body.scrollTop > 299;
const landingElif = () => document.documentElement.scrollTop < 300
|| document.body.scrollTop < 300;

const standardScrollCondition = () => document.documentElement.scrollTop > 99
|| document.body.scrollTop > 99;
const standardElifCondition = () => document.documentElement.scrollTop < 100
|| document.body.scrollTop < 100;

function IndexNavbar({ landing }) {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  const scrollCondition = () => (landing ? landingPageScroll() : standardScrollCondition());
  const scrollElifCondition = () => (landing ? landingElif() : standardElifCondition());

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        scrollCondition()
      ) {
        setNavbarColor('');
      } else if (
        scrollElifCondition()
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            title="Coded by Creative Tim"
          >
            Kamień i Co?
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/about-us" tag={Link}>
                O nas
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/projects" tag={Link}>
                Nasze Działania
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink to={{ pathname: "https://kamienico.medium.com/"  }} target="_blank"  tag={Link}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact-us" tag={Link}>
                Kontakt
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/kamienicowarszawa/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/kamien_i_co/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/kamien-i-co"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
