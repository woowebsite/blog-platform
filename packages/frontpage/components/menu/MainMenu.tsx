import Link from 'next/link';
import Menu, { ILink } from './types';

interface MenuProps {
  dataSource: Menu[];
}
const MainMenu = ({ dataSource }: MenuProps) => {
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
    <nav className="mainmenunav d-lg-block">
      <ul className="mainmenu">
        {dataSource.map((menu) => {
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
