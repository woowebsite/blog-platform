import { AppProps } from 'next/app';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/plugins.css';
import '../public/assets/scss/style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-modal-video/scss/modal-video.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
