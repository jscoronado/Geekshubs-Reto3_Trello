import './App.css';
import TrelloList from "./components/TrelloList";
import AddCardList from "./components/AddCardList";
import Logo from "./assets/img/logo-app.png";
import {fade, makeStyles} from "@material-ui/core";
import dataApp from "./dataApp";
import {useState} from "react";

function App() {
  const classes = uneStyle();
  const [data, setData] = useState(dataApp);
    console.log(data)
  return (
    <div className="App">
      <header>
          <img src={Logo}/>
      </header>
        <div className={classes.container}>

            {
                data.listIds.map(listID => {
                    const list = data.lists[listID]
                    return <TrelloList list={list} key={listID}/>
                })
            }

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
