import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
