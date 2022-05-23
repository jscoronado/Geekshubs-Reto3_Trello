import {Paper, CssBaseline, makeStyles} from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardList from "./AddCardList";
import {Draggable, Droppable} from "react-beautiful-dnd";

const TrelloList = ({list, index}) => {
  const classes = uneStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {
        (provided) => (
            <div ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
            >
              <Paper className = {classes.root}>
                <CssBaseline/>
                <ListTitle title={list.title} listId={list.id}/>
                <Droppable droppableId={list.id}>
                  {
                    (provided) => (
                        <div ref={provided.innerRef}
                             {...provided.droppableProps}
                        >
                          {
                            list.cards.map((card, index) => (
                                <TrelloCard card={card} key={card.id} index={index}/>
                            ))
                          }
                          {provided.placeholder}
                        </div>
                    )
                  }
                </Droppable>


                <AddCardList type="card" listId={list.id}></AddCardList>
              </Paper>
            </div>
        )
      }

    </Draggable>
  )
}

const uneStyle = makeStyles(theme => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#ebecf0",
    margin: theme.spacing(1),
    padding: "10px",
  }
}))

export default TrelloList