import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
  render() {
    const { contact, textColor } = this.props;
    return (
      <dl className="social-profiles">
        {contact.email &&
          <span>
            <dt style={{ color: `${textColor}` }}>Email</dt>
            <dd style={{ color: `${textColor}` }}>
              <a
                itemprop="email"
                style={{ color: `${textColor}` }}
                href={`mailto: ${contact.email}`}
              >
                {contact.email}
              </a>
            </dd>
          </span>}

        {contact.phone &&
          <span>
            <dt style={{ color: `${textColor}` }}>Phone</dt>
            <dd style={{ color: `${textColor}` }}>
              <a
                itemprop="telephone"
                style={{ color: `${textColor}` }}
                href={`tel: ${contact.phone}`}
              >
                {contact.phone}
              </a>
            </dd>
          </span>}

        {(contact.facebook ||
          contact.linkedin ||
          contact.dribbble ||
          contact.angellist ||
          contact.behance ||
          contact.blogger ||
          contact.etsy ||
          contact.fitbit ||
          contact.fiverr ||
          contact.flickr ||
          contact.foursquare ||
          contact.github ||
          contact.gofundme ||
          contact.goodreads ||
          contact.Highbrow ||
          contact.imdb ||
          contact.indiegogo ||
          contact.instagram ||
          contact.kickstarter ||
          contact.lastfm ||
          contact.medium ||
          contact.pinterest ||
          contact.pocket ||
          contact.producthunt ||
          contact.quora ||
          contact.reddit ||
          contact.skillshare ||
          contact.slideshare ||
          contact.snapchat ||
          contact.soundcloud ||
          contact.spotify ||
          contact.stackoverflow ||
          contact.strava ||
          contact.tumblr ||
          contact.twitch ||
          contact.twitter ||
          contact.upwork ||
          contact.vk ||
          contact.vsco ||
          contact.vimeo ||
          contact.vine ||
          contact.weibo ||
          contact.wikipedia ||
          contact.wordpress ||
          contact.xing ||
          contact.yelp ||
          contact.fivehundredpx ||
          contact.care ||
          contact.google) &&
          <span>
            <dt style={{ color: `${textColor}` }}>Find me on</dt>
            <dd className="social">
              {contact.facebook &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.facebook}
                  target="_blank"
                >
                  <span className="fa fa-facebook" />
                </a>}

              {contact.linkedin &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.linkedin}
                  target="_blank"
                >
                  <span className="fa fa-linkedin" />
                </a>}

              {contact.dribbble &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.dribbble}
                  target="_blank"
                >
                  <span className="fa fa-dribbble" />
                </a>}

              {contact.angellist &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.angellist}
                  target="_blank"
                >
                  <span className="fa fa-angellist" />
                </a>}
              {contact.behance &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.behance}
                  target="_blank"
                >
                  <span className="fa fa-behance" />
                </a>}
              {contact.blogger &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.blogger}
                  target="_blank"
                >
                  <span className="fa fa-blogger" />
                </a>}
              {contact.etsy &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.etsy}
                  target="_blank"
                >
                  <span className="fa fa-etsy" />
                </a>}
              {contact.fitbit &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.fitbit}
                  target="_blank"
                >
                  <span className="fa fa-fitbit" />
                </a>}
              {contact.fiverr &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.fiverr}
                  target="_blank"
                >
                  <span className="fa fa-fiverr" />
                </a>}
              {contact.flickr &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.flickr}
                  target="_blank"
                >
                  <span className="fa fa-flickr" />
                </a>}
              {contact.foursquare &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.foursquare}
                  target="_blank"
                >
                  <span className="fa fa-foursquare" />
                </a>}
              {contact.github &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.github}
                  target="_blank"
                >
                  <span className="fa fa-github" />
                </a>}
              {contact.gofundme &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.gofundme}
                  target="_blank"
                >
                  <span className="fa fa-gofundme" />
                </a>}
              {contact.goodreads &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.goodreads}
                  target="_blank"
                >
                  <span className="fa fa-goodreads" />
                </a>}
              {contact.Highbrow &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.Highbrow}
                  target="_blank"
                >
                  <span className="fa fa-highbrow" />
                </a>}
              {contact.imdb &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.imdb}
                  target="_blank"
                >
                  <span className="fa fa-imdb" />
                </a>}
              {contact.indiegogo &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.indiegogo}
                  target="_blank"
                >
                  <span className="fa fa-indiegogo" />
                </a>}
              {contact.instagram &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.instagram}
                  target="_blank"
                >
                  <span className="fa fa-instagram" />
                </a>}
              {contact.kickstarter &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.kickstarter}
                  target="_blank"
                >
                  <span className="fa fa-kickstarter" />
                </a>}
              {contact.lastfm &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.lastfm}
                  target="_blank"
                >
                  <span className="fa fa-lastfm" />
                </a>}
              {contact.medium &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.medium}
                  target="_blank"
                >
                  <span className="fa fa-medium" />
                </a>}
              {contact.pinterest &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.pinterest}
                  target="_blank"
                >
                  <span className="fa fa-pinterest-p" />
                </a>}
              {contact.pocket &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.pocket}
                  target="_blank"
                >
                  <span className="fa fa-get-pocket" />
                </a>}
              {contact.producthunt &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.producthunt}
                  target="_blank"
                >
                  <span className="fa fa-product-hunt" />
                </a>}
              {contact.quora &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.quora}
                  target="_blank"
                >
                  <span className="fa fa-quora" />
                </a>}
              {contact.reddit &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.reddit}
                  target="_blank"
                >
                  <span className="fa fa-reddit-alien" />
                </a>}
              {contact.skillshare &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.skillshare}
                  target="_blank"
                >
                  <span className="fa fa-skillshare" />
                </a>}
              {contact.slideshare &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.slideshare}
                  target="_blank"
                >
                  <span className="fa fa-slideshare" />
                </a>}
              {contact.snapchat &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.snapchat}
                  target="_blank"
                >
                  <span className="fa fa-snapchat" />
                </a>}
              {contact.soundcloud &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.soundcloud}
                  target="_blank"
                >
                  <span className="fa fa-soundcloud" />
                </a>}
              {contact.spotify &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.spotify}
                  target="_blank"
                >
                  <span className="fa fa-spotify" />
                </a>}
              {contact.stackoverflow &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.stackoverflow}
                  target="_blank"
                >
                  <span className="fa fa-stack-overflow" />
                </a>}
              {contact.strava &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.strava}
                  target="_blank"
                >
                  <span className="fa fa-strava" />
                </a>}
              {contact.tumblr &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.tumblr}
                  target="_blank"
                >
                  <span className="fa fa-tumblr" />
                </a>}
              {contact.twitch &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.twitch}
                  target="_blank"
                >
                  <span className="fa fa-twitch" />
                </a>}
              {contact.twitter &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.twitter}
                  target="_blank"
                >
                  <span className="fa fa-twitter" />
                </a>}
              {contact.upwork &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.upwork}
                  target="_blank"
                >
                  <span className="fa fa-upwork" />
                </a>}
              {contact.vk &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.vk}
                  target="_blank"
                >
                  <span className="fa fa-vk" />
                </a>}
              {contact.vsco &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.vsco}
                  target="_blank"
                >
                  <span className="fa fa-vsco" />
                </a>}
              {contact.vimeo &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.vimeo}
                  target="_blank"
                >
                  <span className="fa fa-vimeo" />
                </a>}
              {contact.vine &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.vine}
                  target="_blank"
                >
                  <span className="fa fa-vine" />
                </a>}
              {contact.weibo &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.weibo}
                  target="_blank"
                >
                  <span className="fa fa-weibo" />
                </a>}
              {contact.wikipedia &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.wikipedia}
                  target="_blank"
                >
                  <span className="fa fa-wikipedia-w" />
                </a>}
              {contact.wordpress &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.wordpress}
                  target="_blank"
                >
                  <span className="fa fa-wordpress" />
                </a>}
              {contact.xing &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.xing}
                  target="_blank"
                >
                  <span className="fa fa-xing" />
                </a>}
              {contact.yelp &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.yelp}
                  target="_blank"
                >
                  <span className="fa fa-yelp" />
                </a>}
              {contact.fivehundredpx &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.fivehundredpx}
                  target="_blank"
                >
                  <span className="fa fa-500px" />
                </a>}
              {contact.care &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.care}
                  target="_blank"
                >
                  <span className="fa fa-care" />
                </a>}
              {contact.google &&
                <a
                  style={{ color: `${textColor}` }}
                  href={contact.google}
                  target="_blank"
                >
                  <span className="fa fa-google-plus" />
                </a>}
            </dd>
          </span>}
      </dl>
    );
  }
}

export default Contact;
