import { AppInitialProps } from 'next/app';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { AppProps } from 'next-redux-wrapper';
import { withRouter } from 'next/router';

import messages from 'shared/localeHelper';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/antd-custom.scss';
import '../assets/RichEditor.scss';

class MyApp extends React.Component<AppProps & AppInitialProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    // Locale
    const { locale, defaultLocale, pathname } = router;
    return (
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages(locale, pathname)}
      >
        <Component {...pageProps} />
      </IntlProvider>
    );
  }
}

export default withRouter(MyApp);
