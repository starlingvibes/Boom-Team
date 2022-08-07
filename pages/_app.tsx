import '../styles/globals.css';
import '../styles/verification.css';
import '../components/layouts/partials/styles/App.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
