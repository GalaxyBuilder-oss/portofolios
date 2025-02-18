import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";
import "react-datetime/css/react-datetime.css";
import AppProvider from "../components/AppContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default App;
