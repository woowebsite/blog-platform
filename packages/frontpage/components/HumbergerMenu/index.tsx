import { HTMLAttributes } from 'react';
import cn from 'classnames';
import { FiMenu } from 'react-icons/fi';

const HumbergerMenu = ({
  className = 'd-block d-lg-none pl--20',
}: HTMLAttributes<HTMLElement>) => {
  const menuTrigger = () => {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  };

  return (
    <div className={cn('humberger-menu ', className)}>
      <span onClick={menuTrigger} className="menutrigger text-white">
        <FiMenu />
      </span>
    </div>
  );
};

export default HumbergerMenu;
