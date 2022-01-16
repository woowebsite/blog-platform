import React, { Fragment } from 'react';
import Head from 'next/head';
import { getComponent } from '~/lib/utils';

// Should get from database
import layout from 'lib/layout';
import components from '~/lib/components.config';

interface PageProps {
  meta: any;
  layout: string[];
  components: any;
}
const Page = ({ meta, layout, components }: PageProps) => {
  // render copmonent from layout
  const renderComponents = () => {
    if (typeof window === 'undefined') return;
    const elements = layout.map((componentName) => {
      const componentData = components[componentName];
      const dataSource = componentData.dataSource;
      const comp = getComponent(componentData.componentName);
      const Component = React.createElement(comp, {
        key: componentName,
        id: componentName,
        ...dataSource,
      });
      return Component;
    });

    return elements;
  };

  return (
    <Fragment>
      <Head>
        <title>{meta.title} | Next.js Blog Platform</title>
        <meta property="og:image" content={meta.ogImage.url} />
      </Head>

      {renderComponents()}
    </Fragment>
  );
};

Page.getInitialProps = async (ctx: any) => {
  const { res, req, query, pathname } = ctx;
  const meta = {
    title: query.slug,
    ogImage: {
      url: 'https://wiki.tino.org/wp-content/uploads/2020/03/tro%CC%9B%CC%89-tha%CC%80nh-blogger-chuye%CC%82n-nghie%CC%A3%CC%82p.jpg',
    },
  };

  return { meta, components, layout };
};

export default Page;
