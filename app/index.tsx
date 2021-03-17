import type { AppProps } from 'next/app';
import { VFC } from 'react';
import { ThemeProvider } from '@emotion/react';
import { wrapper } from './store';
import { theme } from '~/styles';
import { Layout, Header, Footer } from '~/atoms/layout';

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const { pathname } = router;

  if (pathname.startsWith('/signin')) {
    return <Component />;
  }
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(App);
