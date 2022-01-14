import Link from 'next/link';
import { HTMLAttributes } from 'react';
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
  return (
    <nav className={`mainmenunav ${wrapper?.className}`}>
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
