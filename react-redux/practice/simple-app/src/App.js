import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1 style={{ justifyContent: "flex", textAlign: "center" }}>
        This is just for Rev
      </h1>
      <PostForm />
      <Posts />
    </div>
  );
}
export default App;
