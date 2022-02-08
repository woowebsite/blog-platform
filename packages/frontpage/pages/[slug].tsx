import React, { Fragment } from 'react';
import Head from 'next/head';
import { getComponent } from '~/lib/utils';
import { withApollo } from 'apollo/apollo';
import { gql, useQuery } from '@apollo/client';

// Should get from database
import { GET_OPTION } from '~/definitions/options-definitions';

// data
import TemplateConfig from '~/types/TemplateConfig';

interface PageProps {
  meta: any;
  data: any;
}
const Page = ({ meta, data }: PageProps) => {
  const { template, config }: TemplateConfig = JSON.parse(data.option.value);

  const renderComponents = () => {
    if (typeof window === 'undefined') return;
    const elements = template.map((componentName) => {
      const componentData = config[componentName];
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

      {data && renderComponents()}
    </Fragment>
  );
};

Page.getInitialProps = async (ctx: any) => {
  const { res, req, query, pathname } = ctx;
  const { apolloClient } = ctx;
  try {
    const { data, loading, error, refetch } = await apolloClient.query({
      query: GET_OPTION,
      variables: {
        where: { name: 'home' },
      },
    });

    const meta = {
      title: query.slug,
      data,
      ogImage: {
        url: 'https://wiki.tino.org/wp-content/uploads/2020/03/tro%CC%9B%CC%89-tha%CC%80nh-blogger-chuye%CC%82n-nghie%CC%A3%CC%82p.jpg',
      },
    };

    return { meta, data };
  } catch (error) {
    console.log('SSR Error: ', error);
  }
};

export default withApollo({ ssr: false })(Page);
