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

// reactstrap components
import { Button, Container } from 'reactstrap';

// core components

function LandingPageHeader() {
  const pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  const content = (
    <>
      <Container>
        <div className="motto text-center main-header">
          <h1>Ratujemy warszawskie zabytki</h1>
          <br />
          <Button className="btn-round" color="neutral" type="button" outline href="#about">
            Dowiedz się więcej
          </Button>
        </div>
      </Container>
      <div className="filter filter-landing" />
    </>
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require('assets/img/background.jpg')})`,
        }}
        className="page-header"
        data-parallax
        ref={pageHeader}
      >
        {content}
      </div>
    </>
  );
}

export default LandingPageHeader;
