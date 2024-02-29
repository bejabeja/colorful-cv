import './App.css';
import Contact from "./Pages/Contact";
import Timeline from "./Pages/Timeline";
import Intro from "./Pages/Intro";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <body>
            <Intro></Intro>
            <About></About>
            <Timeline></Timeline>
            <Contact></Contact>
        </body>
        <footer></footer>
    </div>
  );
}

export default App;
