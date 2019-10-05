import smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import PropTypes from 'prop-types';

const Element = (props) => props.children;

class Scroll extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    smoothscroll.polyfill();
  }

  scrollTo = (element, offSet = 0, timeout = null) => {
    const elemPos = element
      ? element.getBoundingClientRect().top + window.pageYOffset
      : 0;
    if (timeout) {
      setTimeout(() => {
        window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
      }, timeout);
    } else {
      window.scroll({ top: elemPos + offSet, left: 0, behavior: 'smooth' });
    }
  }

  handleClick(e) {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const {
      type, element, offset, timeout,
    } = this.props;
    if (type && element) {
      const elemIndex = 0;

      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[elemIndex];
          scroll = !!elem;
          break;
        case 'id':
          elem = document.getElementById(element);
          scroll = !!elem;
          break;
        default:
      }
    }

    if (scroll) {
      this.scrollTo(elem, offset, timeout);
    } else {
      console.log(`Element not found: ${element}`); // eslint-disable-line
    }
  }

  render() {
    return (
      <Element>
        {typeof this.props.children === 'object' ? (
          React.cloneElement(this.props.children, { onClick: this.handleClick })
        ) : (
          <span onClick={this.handleClick}>{this.props.children}</span>
        )}
      </Element>
    );
  }
}

Scroll.propTypes = {
  type: PropTypes.string,
  element: PropTypes.string,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Scroll.defaultProps = {
  type: null,
  element: null,
  offset: 0,
  timeout: 0,
};

export default Scroll;
