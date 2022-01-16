import { HTMLAttributes } from 'react';
import cn from 'classnames';
import { FiMenu, FiX } from 'react-icons/fi';

const HumbergerMenu = ({
  className = 'd-block d-lg-none pl--20',
}: HTMLAttributes<HTMLElement>) => {
  const closeMenuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  };

  const menuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  };

  return (
    <>
      <div className={cn('humberger-menu ', className)}>
        <span onClick={menuTrigger} className="menutrigger text-white">
          <FiMenu />
        </span>
      </div>
      <div className="close-menu d-block d-lg-none">
        <span onClick={closeMenuTrigger} className="closeTrigger">
          <FiX />
        </span>
      </div>
    </>
  );
};

export default HumbergerMenu;
