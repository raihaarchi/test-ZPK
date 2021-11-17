import React, { FC } from 'react';
import useAOS from 'hooks/useAOS';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'emotion-theming';
import Layout from 'components/layout/layout';
import theme from 'styled/theme';
import { useAppInit } from 'hooks/useAppInit';
import 'global.css';

type Noop = {
  children: React.ReactElement;
};

interface AppPropsExtends extends AppProps {
  Component: AppProps['Component'] & { Layout?: FC };
}

const Noop: FC<Noop> = ({ children }) => children;

function App({ Component, pageProps }: AppPropsExtends) {
  useAOS();
  useAppInit();

  const ComponentLayout = Component.Layout || Noop;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <ComponentLayout>
            <Component {...pageProps} />
          </ComponentLayout>
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
