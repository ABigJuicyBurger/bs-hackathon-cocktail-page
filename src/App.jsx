import { BrowserRouter } from 'react-router-dom';
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.css";

function App() {
  // TESTING GIT BRANCHING
  // so wwen pushing let leader merge through sending PR, then pull when you make changes

  return (
    <BrowserRouter>
      <div className="App">
        <Gallery />
      </div>
    </BrowserRouter>
  );

}

export default App;
