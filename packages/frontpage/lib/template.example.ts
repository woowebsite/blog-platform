export const config = {
  template: [
    'Header',
    'SliderTwo',
    'Content1',
    'Content2',
    'Footer',
    'ScrollTop',
  ],
  config: {
    Header: {
      componentName: 'Header',
      dataSource: {
        color: 'default-color',
        menu: {
          wrapper: {
            className: 'd-lg-block',
          },
          menus: [
            {
              className: 'has-droupdown',
              link: {
                children: 'Home',
                href: '/#',
              },
              subMenu: [
                {
                  children: 'Main Demo',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
              ],
            },
            {
              className: 'has-droupdown',
              link: {
                children: 'Service',
                href: '/#',
              },
              subMenu: [
                {
                  children: 'Main Demo',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
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
                {
                  children: 'Main Demo',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
              ],
            },
            {
              className: 'has-droupdown',
              link: {
                children: 'Blocks',
                href: '/#',
              },
              subMenu: [
                {
                  children: 'Main Demo',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
                {
                  children: 'Main Demo Dark',
                  href: '/main-demo',
                },
              ],
            },
            {
              link: {
                children: 'About',
                href: '/#',
              },
            },
          ],
        },
        logo: {
          logo: 'light',
          href: '/',
        },
        button: {
          text: 'Buy now',
          href: '#',
        },
      },
    },
    SliderTwo: {
      componentName: 'SliderTwo',
      dataSource: {
        slides: [
          {
            textPosition: 'text-center',
            bgImage: 'bg_image--15',
            category: '',
            title: 'Marketing2',
            description:
              'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
            buttonText: 'Contact Us',
            buttonLink: '/contact-us',
          },
          {
            textPosition: 'text-center',
            bgImage: 'bg_image--12',
            category: '',
            title: 'Development.',
            description:
              'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
            buttonText: 'Contact Us',
            buttonLink: '/blog',
          },
          {
            textPosition: 'text-center',
            bgImage: 'bg_image--13',
            category: '',
            title: 'UX Research.',
            description:
              'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
            buttonText: 'Contact Us',
            buttonLink: '/blog',
          },
        ],
      },
    },
    Content1: {
      componentName: 'Content',
      dataSource: {
        title: 'Our Project',
        className: 'rn-portfolio-area bg_color--1 ptb--120',
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
        children: [
          {
            name: 'wrapper-porfolio',
            componentName: 'div',
            dataSource: {
              className: 'row',
              children: [
                {
                  name: 'porfolio',
                  componentName: 'PortfolioMasonry',
                  dataSource: {
                    item: 9,
                    column:
                      'col-lg-3 col-md-6 col-sm-6 col-12 portfolio-tilthover',
                  },
                },
              ],
            },
          },
          {
            name: 'button-wrapper',
            componentName: 'div',
            dataSource: {
              className: 'row',
              children: [
                {
                  componentName: 'div',
                  dataSource: {
                    className: 'col-md-12',
                    children: [
                      {
                        componentName: 'div',
                        dataSource: {
                          className: 'view-more-btn mt--60 text-center',
                          children: [
                            {
                              name: 'viewMore',
                              componentName: 'AnchorButton',
                              dataSource: {
                                text: 'View More Project',
                                href: '/portfolio',
                                className: 'rn-button-style--2 btn-solid',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    Content2: {
      componentName: 'Content',
      dataSource: {
        title: 'Our Clients',
        className: 'rn-brand-area ptb--120 bg_color--5',
        description:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
        children: [
          {
            name: 'wrapper-clients',
            componentName: 'div',
            dataSource: {
              className: 'row',
              children: [
                {
                  componentName: 'div',
                  dataSource: {
                    className: 'col-lg-12 mt--40',
                    children: [
                      {
                        componentName: 'Brand',
                        dataSource: {
                          branstyle: 'branstyle--2',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    Footer: {
      componentName: 'FooterTwo',
    },
    ScrollTop: {
      componentName: 'ScrollTop',
    },
  },
};
