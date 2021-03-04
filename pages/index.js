/** Dependencies */
import React from 'react';
import Typed from 'react-typed';
/** Components */
import BaseLayout from '../components/layouts/base-layout.component';
import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack JS Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Romanova Elena. Get informed, collaborate
                    and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  strings={[
                    'Javascript, Typescript',
                    'React, Redux, Mobx, NextJS, SSR',
                    'Angular, RxJS, NgRx',
                    'Node, Express, NestJS, GraphQL',
                    'MongoDB, PostgreSQL',
                    'Docker, Kubernatis, Git, Azure',
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                ></Typed>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
