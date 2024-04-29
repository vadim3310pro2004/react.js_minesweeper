import "./App.scss";
import AppQueryProvider from "./providers/AppQueryProvider";
import { AppRouterProvider } from "./providers/AppRouterProvider";
import AppStoreProvider from "./providers/AppStoreProvider";


const App = () => {

  return (
    <AppStoreProvider>
      <AppQueryProvider>
        <AppRouterProvider />
      </AppQueryProvider>
    </AppStoreProvider>
  );
};


export default App;