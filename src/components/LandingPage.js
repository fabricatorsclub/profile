import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import FontAwesome from 'react-fontawesome';

class LandingPage extends Component {
  state = {
    menuOpen: false,
  };

  navClose() {
    this.setState({ menuOpen: false });
  }

  navOpen() {
    this.setState({ menuOpen: true });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <div id="landingPage">
        <Helmet>
          <title>Itsmybio.me | Your professional online bio</title>

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Itsmybio.me" />
          <meta
            property="og:site_name"
            content="Your professional online bio"
          />
          <meta property="og:url" content="https://itsmybio.me" />
          <meta
            property="og:description"
            content="Your professional Bio can speak lot more than your CV. Build your online Bio for free."
          />

          <link
            href="https://fonts.googleapis.com/css?family=Volkhov:400,700"
            rel="stylesheet"
          />
          {/* <meta property="og:image" content={this.props.DPImage} /> */}
        </Helmet>

        {menuOpen &&
          <div className="mobileMenu">
            <div className="heading">
              <div className="container">
                <span className="brand">Itsmybio.me</span>
                <a onClick={this.navClose.bind(this)}>
                  <span className="fa fa-close" />
                </a>
              </div>
            </div>
            <div className="container">
              <a href="mailto: support@itsmybio.me">support@itsmybio.me</a>
              <a href="https://account.itsmybio.me">Sign In</a>
              <a href="https://account.itsmybio.me/register">
                Sign Up <FontAwesome name="long-arrow-right" />
              </a>
            </div>
          </div>}

        <div className="pageWrapper">
          <div className="banner">
            <div className="container">
              <div className="topStrip">
                <a className="brand" href="/">
                  Itsmybio.me
                </a>

                <div className="mobileMenuTrigger">
                  <a onClick={this.navOpen.bind(this)}>
                    <span className="fa fa-bars" />
                  </a>
                </div>

                <div className="signCTA">
                  <a href="mailto: support@itsmybio.me">support@itsmybio.me</a>
                  <a href="https://account.itsmybio.me">Sign In</a>
                  <a href="https://account.itsmybio.me/register">
                    Sign Up <FontAwesome name="long-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <h3>You are what you do!</h3>

                  <h1>
                    Aspire to do<br /> what keeps you intrigued!
                  </h1>

                  <p>Let the world know your professional interests.</p>

                  <a
                    href="https://account.itsmybio.me/register"
                    className="btn signup"
                  >
                    <span>Write your Bio for free</span>{' '}
                    <FontAwesome name="long-arrow-right" />
                  </a>
                </div>
                <div className="col-md-7">
                  <img src={require('../images/macbook.png')} width="675" />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <div className="hero-well">
                  <h5>What’s new on itsmybio.me</h5>
                  <h2>Take a FREE personality test</h2>
                  <p>and know your personality in 4 simple clicks.</p>

                  <img src={require('../images/people.png')} width="300" />
                </div>
              </div>
            </div>
          </div>

          <div className="homeContWrapper">
            <h5>More about itsmybio.me</h5>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/001.png')} width="395" />
              </div>
              <div>
                <p>Get your unique URL</p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/002.png')} width="300" />
              </div>
              <div>
                <p>Get your professional online identity</p>
              </div>
            </div>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/003.png')} width="300" />
              </div>
              <div>
                <p>Present who you are and what you do in one URL</p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/004.png')} width="300" />
              </div>
              <div>
                <p>Bio will speak louder than CV</p>
              </div>
            </div>

            <div className="secRow imgRight">
              <div>
                <img src={require('../images/005.png')} width="300" />
              </div>
              <div>
                <p>
                  Write your Bio. So, that people will know what you really are
                </p>
              </div>
            </div>

            <div className="secRow">
              <div>
                <img src={require('../images/006.png')} width="300" />
              </div>
              <div>
                <p>Your profile on itsmybio.me is Mobile friendly</p>
              </div>
            </div>
          </div>

          <div className="footer">
            <span>
              Made with <FontAwesome name="heart" /> in India
            </span>
            <span>
              <FontAwesome name="copyright" /> All rights reserved
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
