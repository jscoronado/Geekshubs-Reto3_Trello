import './App.css';
import TrelloList from "./components/TrelloList";
import AddCardList from "./components/AddCardList";
import Logo from "./assets/img/logo-app.png";
import {fade, makeStyles} from "@material-ui/core";

function App() {
  const classes = uneStyle();
  return (
    <div className="App">
      <header>
          <img src={Logo}/>
      </header>
        <div className={classes.container}>
            <TrelloList></TrelloList>
            <TrelloList></TrelloList>
            <TrelloList></TrelloList>
            <AddCardList type="list"/>
        </div>
    </div>
  );
}

const uneStyle = makeStyles(theme => ({
    container: {
        display: "flex",
    }
}))

export default App;
