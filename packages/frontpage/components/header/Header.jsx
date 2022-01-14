import React, { Component } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import MainMenu from '~/components/menu/MainMenu';
import Logo from '~/components/logo/Logo';
import AnchorButton from 'components/AnchorButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }

  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }

  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  }

  render() {
    var elements = document.querySelectorAll('.has-droupdown > a');
    const {
      menu,
      logo,
      button,
      color = 'default-color',
    } = this.props.dataSource;

    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }

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
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
