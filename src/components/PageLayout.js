import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/main.scss';
import Footer from './Footer';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <div id="wrapper">
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default PageLayout;
