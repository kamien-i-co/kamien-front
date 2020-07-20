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
import { Container } from 'reactstrap';

// reactstrap components

// core components

function StandardHeader({ img, text }) {
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

  return (
    <>
      <div
        style={{
          backgroundImage:
            `url(${require(`assets/img/${img}`)})`,
        }}
        className="page-header page-header-xs"
        data-parallax
        ref={pageHeader}
      >
        <Container>
          <div className="motto text-center main-header">
            <h2>{text}</h2>
          </div>
        </Container>
        <div className="filter" />
      </div>
    </>
  );
}

export default StandardHeader;
