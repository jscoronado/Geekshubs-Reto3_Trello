import './App.css';
import TrelloList from "./components/TrelloList";
import AddCardList from "./components/AddCardList";
import Logo from "./assets/img/logo-app.png";
import {fade, makeStyles} from "@material-ui/core";
import dataApp from "./dataApp";
import {useState} from "react";
import ContextAPI from "./ContextAPI";
import uuid from "react-uuid";

function App() {
  const classes = uneStyle();
  const [data, setData] = useState(dataApp);

  const updateListTitle = (updatedTitle, listId) => {
      const list = data.lists[listId]
      list.title = updatedTitle
      setData({
          ...data, lists: { ...data.lists, [listId] : list }
      })
  }

  const addCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
        id: newCardId,
        title: title,
    }
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]

    setData({
        ...data, lists: {...data.lists, [listId] : list}
    })
  }

  const addList = (title) => {

  }

  return (
      <ContextAPI.Provider value={{updateListTitle, addCard, addList}}>
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
