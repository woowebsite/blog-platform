import KeyPair from '~/types/KeyPair';
import Header from 'components/header/template.config';
import Content from 'components/Content';
import SliderTwo from 'components/slider/template.config';

const components: KeyPair = {
  Header,
  SliderTwo,
  Content1: {
    component: Content,
    dataSource: {
      title: 'Our Project',
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
                              className: 'rn-button-style--2 btn-solid'
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
};
export default components;
