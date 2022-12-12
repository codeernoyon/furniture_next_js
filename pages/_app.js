// import Footer from '../components/Footer'
import { Provider } from "react-redux";
import { Footer, Header, Layout } from "../app/components/sections";
import { store } from "../app/redux/sotre";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="relative ">
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* <Footer/> */}
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;
