const fs = require('fs');
const express = require('express');
const firebase = require('firebase');
const app = express();
const getSite = require('./getSite');
const hostsMap = require('./hostsMap.json');

app.use(express.static('build/'));

const manifestStr = fs.readFileSync('./build/asset-manifest.json', {
  encoding: 'utf8',
});

const manifest = JSON.parse(manifestStr);

const config = {
  apiKey: 'AIzaSyAdqqCE5ccr5Y6A2nfOE2zgSO3rseyyJhE',
  authDomain: 'profile-85ec7.firebaseapp.com',
  databaseURL: 'https://profile-85ec7.firebaseio.com',
  projectId: 'profile-85ec7',
  storageBucket: 'profile-85ec7.appspot.com',
  messagingSenderId: '707103836753',
};

firebase.initializeApp(config);

const ref = firebase.database().ref();

// Get Profile Data from firebase
const getProfileData = username => {
  const unRef = ref.child(`usernames/${username}/`);

  return new Promise((resolve, reject) => {
    unRef.once('value').then(function(Name) {
      const uid = Name.val();

      if (uid) {
        const proRef = ref.child(`profiles/${uid}/`);

        return proRef
          .once('value')
          .then(function(Name) {
            const NameVal = Name.val();
            resolve(NameVal);
          })
          .catch(err => {
            reject('USER_DOES_NOT_HAVE_PROFILE_DATA');
            console.log('got error', err);
          });
      } else {
        reject('Unable to find user');
      }
    });
  });
};

const ProfileDataFn = function(req, res) {
  const { username, customDomain } = req.params;
  getProfileData(username)
    .then(value => {
      const { name } = value;
      const val = getSite({
        userData: value,
        customDomain,
        username,
        manifest,
      });
      res.send(val);
    })
    .catch(err => {
      res.send('user not found');

      console.log('some error', err);
    });
};

const getListOfUserNames = () => {
  const unRef = ref.child(`usernames/`);

  return unRef.once('value').then(function(Name) {
    const NameVal = Name.val();
    console.log(NameVal);
    return Object.keys(NameVal);
  });
};

const siteMapFn = function(req, res) {
  getListOfUserNames()
    .then(usernames => {
      console.log('usernames', usernames);
      const str = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
<loc>https://itsmybio.me/</loc>
</url>
${usernames
        .map(
          username => `
  <url>
  <loc>https://itsmybio.me/${username}</loc>
  </url>`
        )
        .join('')}

</urlset>`;

      res.set('Content-Type', 'text/xml');
      res.send(str);
    })
    .catch(err => {
      console.log('some error', err);
      res.send('user not found');

      console.log('some error', err);
    });
};

app.get('/', function(req, res) {
  const host = req.get('host');
  console.log('host', host);
  if (host === 'itsmybio.me' || host === 'localhost') {
    const val = getSite({ page: 'home_page', manifest });
    res.send(val);
  } else if (hostsMap[host]) {
    const username = hostsMap[host];
    const req = {
      params: { username, customDomain: true },
    };
    ProfileDataFn(req, res);
  } else {
    res.send('Domain not found');
  }
});
app.get('/profile/:something', function(req, res) {
  const host = req.get('host');
  console.log('host', host);
  if (host === 'itsmybio.me' || host === 'localhost') {
    res.send('Only allowed for custom domains');
  } else if (hostsMap[host]) {
    const username = hostsMap[host];
    const req = {
      params: { username, customDomain: true },
    };
    ProfileDataFn(req, res);
  } else {
    res.send('Domain not found');
  }
});
app.get('/admin', function(req, res) {
  res.send('You have come to admin dashboard page');
});
app.get('/sitemap.xml', siteMapFn);
app.get('/:username', ProfileDataFn);
app.get('/:username/profile/:something', ProfileDataFn);

app.listen(80, function() {
  console.log('Example app listening on port 80!');
});
