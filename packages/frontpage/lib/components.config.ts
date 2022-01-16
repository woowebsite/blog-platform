import KeyPair from '~/types/KeyPair';
import Header from 'components/header/template.config';
import Content from 'components/Content';
import SliderTwo from 'components/slider/template.config';
import FooterTwo from '~/components/footer/FooterTwo';
import ScrollTop from '~/components/ScrollTop';

const components: KeyPair = {
  Header,
  SliderTwo,
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
};
export default components;
