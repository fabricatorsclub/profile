import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <span style={{ width: `${this.props.percentage}%` }} />
      </div>
    );
  }
}

class WorkExperience extends Component {
  render() {
    return (
      <div className="infographic">
        <div className="total-exp">
          <span className="job-title">Total Work Experiance</span>
          <span className="job-duration">2005 - 2017</span>
          <span className="job-exp">12 Years</span>
        </div>
        <div className="job-wrapper">
          <div className="job">
            <span className="job-title">Graphic Designer</span>
            <span className="job-duration">2005 - 2008</span>
            <span className="job-exp">3 Years</span>
          </div>
          <div className="job">
            <span className="job-title">Web Designer</span>
            <span className="job-duration">2008 - 2011</span>
            <span className="job-exp">3 Years</span>
          </div>
          <div className="job">
            <span className="job-title">UI Designer</span>
            <span className="job-duration">2011 - 2017</span>
            <span className="job-exp">6 Years</span>
          </div>
        </div>
        <div className="skills">
          <span className="job-title">Tools proficiency</span>
          <div className="skill">
            <span>Adobe Photoshop</span>
            <ProgressBar percentage="80" />
          </div>
          <div className="skill">
            <span>Adobe Illustrator</span>
            <ProgressBar percentage="60" />
          </div>
          <div className="skill">
            <span>Adobe Indesign</span>
            <ProgressBar percentage="40" />
          </div>
          <div className="skill">
            <span>HTML & CSS</span>
            <ProgressBar percentage="70" />
          </div>
          <div className="skill">
            <span>Javascript</span>
            <ProgressBar percentage="05" />
          </div>
          <div className="skill">
            <span>ReactJs</span>
            <ProgressBar percentage="30" />
          </div>
        </div>
      </div>
    );
  }
}

class Sidebar extends Component {
  render() {
    const { match, contact, themeColor, textColor } = this.props;

    return (
      <div className="sidebar" style={{ backgroundColor: `${themeColor}` }}>
        <div className="home-menu">
          {/* <Link to={`/${match.params.username}`} className="initial">
            Itsmybio.me
          </Link> */}
          <Link
            to={`/`}
            className="initial"
            itemprop="brand"
            style={{ color: `${textColor}` }}
          >
            Itsmybio.me
            <span
              className="badge"
              style={{
                backgroundColor: `${textColor}`,
                color: `${themeColor}`,
              }}
            >
              BETA
            </span>
          </Link>

          <a
            href="https://account.itsmybio.me/wizard/username"
            className="signup"
            target="_blank"
            style={{ color: `${textColor}` }}
          >
            <span className="fa fa-plus" />{' '}
            <span className="text">Create your page</span>
          </a>
        </div>

        <div className="profilePicWrapper" style={this.props.imgStyle}>
          <Route
            exact
            path={`//gopiraja.com/profile/work-experience`}
            render={() => <WorkExperience />}
          />
          <img
            itemprop="image"
            className="profilePic"
            src="/images/blank.gif"
            style={{ backgroundImage: `url("${this.props.DPImage}")` }}
          />
        </div>

        <Contact contact={contact} textColor={textColor} />
      </div>
    );
  }
}

export default Sidebar;
