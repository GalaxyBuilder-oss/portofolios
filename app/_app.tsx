import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/global.css";
import "react-datetime/css/react-datetime.css";
import AppProvider from "../components/AppContext";
import ErrorBoundary from "../components/ErrorBoundary";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
