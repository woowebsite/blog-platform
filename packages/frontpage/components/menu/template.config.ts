import component from './Menu';

export default {
  component,
  dataSource: [
    {
      className: 'has-droupdown',
      link: {
        children: 'Home',
        href: '/#',
      },
      subMenu: [
        { children: 'Main Demo', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
      ],
    },
    {
      className: 'has-droupdown',
      link: {
        children: 'Service',
        href: '/#',
      },
      subMenu: [
        { children: 'Main Demo', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
      ],
    },
    {
      link: {
        children: 'About',
        href: '/#',
      },
    },
    {
      className: 'has-droupdown',
      link: {
        children: 'Pages',
        href: '/#',
      },
      subMenu: [
        { children: 'Main Demo', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
      ],
    },
    {
      className: 'has-droupdown',
      link: {
        children: 'Blocks',
        href: '/#',
      },
      subMenu: [
        { children: 'Main Demo', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
        { children: 'Main Demo Dark', href: '/main-demo' },
      ],
    },
    {
      link: {
        children: 'About',
        href: '/#',
      },
    },
  ],
};
