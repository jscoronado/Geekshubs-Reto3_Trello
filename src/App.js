import './App.css';
import TrelloList from "./components/TrelloList";
import Logo from "./assets/img/logo-app.png";

function App() {
  return (
    <div className="App">
      <header>
          <img src={Logo}/>
      </header>
      <TrelloList></TrelloList>
    </div>
  );
}

export default App;
