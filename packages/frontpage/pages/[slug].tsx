import React, { Fragment } from 'react';
import Head from 'next/head';
import { getComponent } from '~/lib/utils';
import { withApollo } from 'apollo/apollo';
import { gql, useQuery } from '@apollo/client';

// Should get from database
import layout from 'lib/layout';
import components from '~/lib/components.config';
import { GET_TERM_TAXONOMIES } from '~/definitions/taxonomies-definitions';

interface PageProps {
  meta: any;
  layout: string[];
  components: any;
  data: any;
}
const Page = ({ meta, layout, components, data }: PageProps) => {
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
  const { apolloClient } = ctx;
  try {
    const { data, loading, error, refetch } = await apolloClient.query({
      query: GET_TERM_TAXONOMIES,
      variables: {
        where: { taxonomy: 'main_nav' },
      },
    });

    const meta = {
      title: query.slug,
      data,
      ogImage: {
        url: 'https://wiki.tino.org/wp-content/uploads/2020/03/tro%CC%9B%CC%89-tha%CC%80nh-blogger-chuye%CC%82n-nghie%CC%A3%CC%82p.jpg',
      },
    };

    return { meta, components, layout, data };
  } catch (error) {
    console.log('SSR Error: ', error);
  }
};

export default withApollo({ ssr: false })(Page);
