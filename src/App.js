import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import firebase from 'firebase';
import { firebaseAuth } from './config/Fire';
import { getProfileData, getDP } from './helpers/read';

class App extends Component {
  state = {
    name: null,
    notFOund: false,
    isLoaded: false,
    data: null,
    DPImage: '',
    textColor: 'rgb(0,0,0)',
  };
  componentWillMount() {
    const { username } = this.props.match.params;
    getProfileData(username)
      .then(data => {
        if (data) {
          this.setState({
            isLoaded: true,
            data,
          });
          this.colorVal();
        }
      })
      .catch(err => {
        if (err === 'USER_DOES_NOT_HAVE_PROFILE_DATA') {
          console.log('USER_DOES_NOT_HAVE_PROFILE_DATA');
        } else {
          console.log('USER_DOES_NOT_HAVE_PROFILE_DATA : dfdfdf');
        }
        this.setState({ notFOund: true, isLoaded: true });
      });

    getDP(username).then(url => {
      console.log(url);
      this.setState({ DPImage: url });
    });
  }

  colorVal() {
    const data = this.state.data || '';
    const hex = data.themeColor || '#000000';
    const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    const r = parseInt(m[1], 16);
    const g = parseInt(m[2], 16);
    const b = parseInt(m[3], 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    const Luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    console.log('R', r, 'G', g, 'B', b);
    console.log('color', brightness);
    console.log('Luminance', Luminance);

    if (Luminance < 123) {
      this.setState({
        textColor: 'rgb(255,255,255)',
      });
    } else {
      this.setState({
        textColor: 'rgb(0,0,0)',
      });
    }
  }

  render() {
    const { sidebarWidth, ChildComponent, ...rest } = this.props;
    const { notFOund, isLoaded, data, DPImage, textColor } = this.state;
    const { username } = this.props.match.params;

    if (!isLoaded) {
      return (
        <div className="loader">
          <span className="brand">Itsmybio.me</span>
        </div>
      );
    }
    if (notFOund) {
      return (
        <div className="notFound">
          <span className="foundMsg">The profile</span>
          <span className="heading">
            {username}
          </span>
          <span className="message">
            you are looking for is <strong>not found</strong>
          </span>

          <a className="btn btn-primary" href="/">
            Go home
          </a>
        </div>
      );
    }
    return (
      <div>
        <Sidebar
          DPImage={DPImage}
          themeColor={data.themeColor}
          imgStyle={{ width: sidebarWidth }}
          textColor={textColor}
          {...rest}
          contact={data.contact}
        />
        <ChildComponent
          {...rest}
          data={data}
          textColor={textColor}
          DPImage={DPImage}
          UserName={username}
        />
      </div>
    );
  }
}

export default App;
