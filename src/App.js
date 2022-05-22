import './App.css';
import TrelloList from "./components/TrelloList";
import AddCardList from "./components/AddCardList";
import Logo from "./assets/img/logo-app.png";
import {fade, makeStyles} from "@material-ui/core";
import dataApp from "./dataApp";
import {useState} from "react";
import ContextAPI from "./ContextAPI";

function App() {
  const classes = uneStyle();
  const [data, setData] = useState(dataApp);
  console.log(data)
  const updateListTitle = (updatedTitle, listId) => {
      const list = data.lists[listId]
      list.title = updatedTitle
      setData({
          ...data, lists: { ...data.lists, [listId] : list }
      })
  }

  return (
      <ContextAPI.Provider value={{updateListTitle}}>
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
      </ContextAPI.Provider>
  );
}

const uneStyle = makeStyles(theme => ({
    container: {
        display: "flex",
    }
}))

export default App;
