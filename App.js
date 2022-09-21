import { Provider } from "react-redux";
import { store } from "./store";
import Appwrapper from "./appwrapper";

export default function App() {
  return (
    <Provider store={store}>
      <Appwrapper />
    </Provider>
  );
}
