import React, { Fragment } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import PortfolioMasonry from 'elements/portfolio/PortfolioMasonry';
import FooterTwo from 'components/footer/FooterTwo';
import Brand from 'elements/Brand';
import Helmet from 'components/common/Helmet';

// should be save these configurations into database
import layout from './layout';
import components from './components.config';

const HomePortfolio = () => {
  // render copmonent from layout
  const renderComponent = () => {
    const elements = layout.map((componentName) => {
      const componentData = components[componentName];
      const dataSource = componentData.dataSource;
      const Component = React.createElement(componentData.component, {
        key: componentName,
        id: componentName,
        ...dataSource,
      });
      return Component;
    });
    return elements;
  };

  if (typeof window === 'undefined') return 'Loading...';
  return (
    <Fragment>
      <Helmet pageTitle="Home Portfolio" />

      {renderComponent()}

     
    </Fragment>
  );
};
export default HomePortfolio;
