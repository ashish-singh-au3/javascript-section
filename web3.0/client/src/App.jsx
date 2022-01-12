import {
  Footer,
  Home,
  Loader,
  Navbar,
  Services,
  Transactions,
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Loader />
      <Footer />
    </div>
  );
};

export default App;
