import './App.css';
import Logo from "./assets/img/logo.gif";
import {makeStyles } from "@material-ui/core";
import TrelloList from "./components/TrelloList";
import AddCardList from "./components/AddCardList";
import dataApp from "./dataApp";
import {useState} from "react";
import ContextAPI from "./ContextAPI";
import uuid from "react-uuid";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function App() {
  const classes = uneStyle();
  const [data, setData] = useState(dataApp);

  const updateListTitle = (title, listId) => {
      const list = data.lists[listId]
      list.title = title
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
    const newListId = uuid();
    setData({
        listIds: [...data.listIds, newListId],
        lists: {
            ...data.lists, [newListId]: { id: newListId, title: title, cards: [] }
        }
    })
  }

  const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;

      if(!destination) {
          return;
      }

      if (type === 'list') {
          const newListIds = data.listIds;
          newListIds.splice(source.index, 1);
          newListIds.splice(destination.index, 0, draggableId);
          return;
      }

      const sourceList = data.lists[source.droppableId];
      const destinationList = data.lists[destination.droppableId];
      const draggingCard = sourceList.cards.filter(
          (card) => card.id === draggableId
      )[0];

      if (source.droppableId === destination.droppableId) {
          sourceList.cards.splice(source.index, 1);
          destinationList.cards.splice(destination.index, 0, draggingCard);
          const newSate = {
              ...data,
              lists: {
                  ...data.lists,
                  [sourceList.id]: destinationList,
              },
          };
          setData(newSate);
      } else {
          sourceList.cards.splice(source.index, 1);
          destinationList.cards.splice(destination.index, 0, draggingCard);

          const newState = {
              ...data,
              lists: {
                  ...data.lists,
                  [sourceList.id]: sourceList,
                  [destinationList.id]: destinationList,
              },
          };
          setData(newState);
      }
  };

  return (
      <ContextAPI.Provider value={{updateListTitle, addCard, addList}}>
        <div className="App" className={classes.app}>
          <header>
              <img src={Logo}/>
          </header>
          <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" type="list" direction="horizontal">
                  {
                    (provided) => (
                        <div className={classes.container}
                             ref={provided.innerRef}
                             {...provided.droppableProps}
                        >

                            {
                                data.listIds.map((listId, index) => {
                                    const list = data.lists[listId]
                                    return <TrelloList list={list} key={listId} index={index}/>
                                })
                            }

                            <AddCardList type="list"/>
                            {provided.placeholder}
                        </div>
                    )
                  }

              </Droppable>
          </DragDropContext>
        </div>
      </ContextAPI.Provider>
  );
}

const uneStyle = makeStyles((theme) => ({
    app: {
        minHeight: "100vh",
        width: "100%",
        overflowY: "auto",
    },
    container: {
        display: 'flex',
        paddingTop: '60px',
    },
}));

export default App;
