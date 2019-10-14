import React from 'react';
import PropTypes from 'prop-types';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

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
    const { children, fullMenu } = this.props;

    return (
      <div>
        <div id="wrapper">
          <SideBar fullMenu={fullMenu} />
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default PageLayout;
