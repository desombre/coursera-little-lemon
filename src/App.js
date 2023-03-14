import "./App.css";
import { Footer, Header, Main, Navigation } from "./components";

function App() {
  return (
    <div className="layout">
      <Header/>
      <Navigation />
      <div  className="content" >
      <Main/>

      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
