import React, { Component } from 'react';
import Logo from '~/components/logo';
import MainMenu from '~/components/MainMenu';
import AnchorButton from 'components/AnchorButton';
import HumbergerMenu from 'components/HumbergerMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }

  render() {
    const { menu, logo, button, color = 'default-color' } = this.props;

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <Logo {...logo} />
          </div>
          <div className="header-right">
            <MainMenu {...menu} />
            <div className="header-btn">
              <AnchorButton {...button} />
            </div>
            <HumbergerMenu />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
