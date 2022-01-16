import Link from 'next/link';
import { HTMLAttributes, useEffect } from 'react';
import cn from 'classnames';

import Menu, { ILink } from './types';

interface MenuProps {
  menus: Menu[];
  wrapper?: HTMLAttributes<HTMLElement>;
}
const MainMenu = ({ menus, wrapper }: MenuProps) => {
  const renderSubMenu = (subMenu: ILink[]) => {
    return (
      <ul className="submenu">
        {subMenu.map((sub) => (
          <li>
            <Link {...sub} />
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    var elements = document.querySelectorAll('.has-droupdown > a');

    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].addEventListener('click', function (e: any) {
          e.preventDefault();
          this.parentElement
            ?.querySelector('.submenu')
            ?.classList.toggle('active');
          this.classList.toggle('open');
        });
      }
    }
  }, []);

  return (
    <nav className={cn(`mainmenunav`, wrapper?.className)}>
      <ul className="mainmenu">
        {menus.map((menu) => {
          const { link, subMenu, ...rest } = menu;
          return (
            <li {...rest}>
              <Link {...link} />
              {subMenu && renderSubMenu(subMenu)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenu;
