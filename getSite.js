var React = require('react');
var ReactDOMServer = require('react-dom/server');

class HomePage extends React.Component {
  render() {
    const { manifest } = this.props;

    const gaString = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-107210137-1');
    `;
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="google-site-verification"
            content="2z6n4tAtvTYWfVjPf5XA2PDllqlKpo8LTPsHChnkRBQ"
          />
          <meta name="theme-color" content="#000000" />
          <title>Itsmybio.me | Your professional online bio</title>

          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; font-src 'self' data: fonts.gstatic.com;"
          />

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

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Roboto+Slab|Yesteryear"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <body>
          <div id="root">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p>Loading...</p>
            </div>
          </div>
          <link
            rel="stylesheet"
            href={`https://cdn.itsmybio.me/${manifest['main.css']}`}
          />
          <script src={`https://cdn.itsmybio.me/${manifest['main.js']}`} />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-107210137-1"
          />
          <script dangerouslySetInnerHTML={{ __html: gaString }} />
        </body>
      </html>
    );
  }
}

class Site extends React.Component {
  render() {
    const { customDomain, manifest, username, dpUrl, userData } = this.props;

    const gaString = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-107210137-1');
    `;
    const customDomainStr = `var customDomain = "${username}";`;
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <title>
            {userData.name}
          </title>
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`${userData.name} - itsmybio.me`}
          />
          <meta property="og:site_name" content="itsmybio.me" />
          <meta property="og:url" content={`https://itsmybio.me/${username}`} />
          <meta property="og:description" content={userData.shortDesc} />
          <meta property="og:image" content={userData.DPUrl} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Roboto+Slab|Yesteryear"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <body>
          <div id="root">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p>Loading...</p>
            </div>
          </div>
          <link
            rel="stylesheet"
            href={`https://cdn.itsmybio.me/${manifest['main.css']}`}
          />
          {customDomain &&
            <script dangerouslySetInnerHTML={{ __html: customDomainStr }} />}
          <script src={`https://cdn.itsmybio.me/${manifest['main.js']}`} />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-107210137-1"
          />
          <script dangerouslySetInnerHTML={{ __html: gaString }} />
        </body>
      </html>
    );
  }
}

const getSite = props => {
  // console.log('props', props.userData);
  if (props.page === 'home_page') {
    return ReactDOMServer.renderToStaticMarkup(<HomePage {...props} />);
  } else {
    return ReactDOMServer.renderToStaticMarkup(<Site {...props} />);
  }
};

module.exports = getSite;
