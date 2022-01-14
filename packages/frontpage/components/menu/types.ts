import { LiHTMLAttributes } from 'react';

interface Menu extends LiHTMLAttributes<HTMLLIElement> {
  link: ILink;
  subMenu?: ILink[];
}

export interface ILink {
  children: any;
  href: string;
}
export default Menu;
