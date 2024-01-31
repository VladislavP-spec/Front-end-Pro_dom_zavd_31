import { Provider } from 'react-redux';
import Wrapper from "./components/Wrapper.jsx";
import Footer from "./components/Footer.jsx";
// Engine
import {store} from "../engine/store.js";

function App() {
  return (
      <Provider store={store}>
          <Wrapper />
          <Footer />
      </Provider>
  )
}

export default App
