import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ justifyContent: "flex", textAlign: "center" }}>
          This is just for Rev
        </h1>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}
export default App;
