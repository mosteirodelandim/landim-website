import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class LandingLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu, showMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title,
                description,
                keywords,
                OGPThumbnail
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description', content: data.site.siteMetadata.description,
                },
                {
                  name: 'keywords', content: data.site.siteMetadata.keywords,
                },
                {
                  name: 'googlebot', content: 'index',
                },

                // Geo-tagging
                {
                  name: 'geo.region', content: 'PT-03',
                },
                {
                  name: 'geo.placename', content: 'Landim',
                },
                {
                  name: 'geo.position', content: '41.3793;-8.4643',
                },
                {
                  name: 'ICBM', content: '41.3793, -8.4643',
                },

                // Facebook OGP
                {
                  property: 'og:title', content: data.site.siteMetadata.title,
                },
                {
                  property: 'og:description', content: data.site.siteMetadata.description,
                },
                {
                  property: 'og:image', content: data.site.siteMetadata.OGPThumbnail,
                },

                // Twitter OGP
                {
                  name: 'twitter:card', content: 'summary',
                },
                {
                  name: 'twitter:site', content: '@mosteirolandim',
                },
                {
                  name: 'twitter:title', content: data.site.siteMetadata.title,
                },
                {
                  name: 'twitter:description', content: data.site.siteMetadata.description,
                },
                {
                  name: 'twitter:image', content: data.site.siteMetadata.OGPThumbnail,
                },
              ]}
            >
              <html lang="pt" />
            </Helmet>

            <div className={isPreloaded ? 'landing main-body is-preload' : 'landing main-body'}>
              <div id="landingPageWrapper">
                <SideBar fullMenu={fullMenu} showMenu={showMenu} />
                  {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
  fullMenu: PropTypes.bool,
  showMenu: PropTypes.bool
};

LandingLayout.defaultProps = {
  fullMenu: false,
  showMenu: true,
};

export default LandingLayout;
