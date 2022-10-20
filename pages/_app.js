import Layout from "../components/Layout";

import '../styles/screen.css'
import '../styles/screen-fixings.css'
import '../styles/dark-mode.css'
import '../styles/prism.css'
import '../styles/toc.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
