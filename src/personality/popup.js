import React, { Component } from 'react';
import { getPersonalityType } from '../helpers/read';

export default class PersonalityPopup extends Component {
  state = {
    shortDesc: true,
    longDesc: null,
    show: false,
    PersonalityType: null,
  };

  componentWillMount() {
    if (this.props.code !== this.state.PersonalityType) {
      getPersonalityType(this.props.code).then(data => {
        this.setState({
          PersonalityType: data || [],
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.open });
  }

  closePopup = () => {
    this.setState({
      show: false,
    });
  };

  showLongDesc = () => {
    this.setState({
      shortDesc: null,
      longDesc: true,
    });
  };
  hideLongDesc = () => {
    this.setState({
      shortDesc: true,
      longDesc: null,
    });
  };

  render() {
    const { code, open } = this.props;
    const PersonalityData = this.state.PersonalityType;

    if (!PersonalityData) {
      return <div>Loading</div>;
    }
    const title = PersonalityData.title;
    const shortDesc = PersonalityData.shortDesc;
    const similarPeople = PersonalityData.similar;
    const longDesc = PersonalityData.longDesc;

    console.log('this.state.PersonalityType', this.state.PersonalityType);

    return (
      <span>
        {this.state.show &&
          <div className="popup">
            <div className="container">
              <div className="popupHeader">
                <h1>
                  {title}
                </h1>
              </div>
              <div className="popupBody">
                <div
                  className={`result ${this.state.longDesc
                    ? 'longReadActive'
                    : ''}`}
                >
                  {this.state.shortDesc &&
                    <p>
                      {shortDesc}
                    </p>}

                  {this.state.longDesc &&
                    <div className="longDesc">
                      {/* {longDesc.map(([tagName, text], i) =>
                        React.createElement(tagName, { key: i }, text)
                      )} */}

                      {longDesc.map((item, i) => {
                        return (
                          <p key={i}>
                            {item}
                          </p>
                        );
                      })}
                    </div>}
                </div>
              </div>
              <div className="popupFooter">
                <button className="btn btn-default" onClick={this.closePopup}>
                  Close
                </button>
                {this.state.shortDesc
                  ? <button
                      className="btn btn-primary"
                      onClick={this.showLongDesc}
                    >
                      Read detailed report
                    </button>
                  : <button
                      className="btn btn-primary"
                      onClick={this.hideLongDesc}
                    >
                      Hide detailed report
                    </button>}
              </div>
            </div>
            <a className="mask" onClick={this.closePopup} />
          </div>}
      </span>
    );
  }
}
