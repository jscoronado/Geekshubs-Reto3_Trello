import { Paper, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardList from "./AddCardList";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TrelloList = ({list, index}) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {
        (provided) => (
            <div {...provided.draggableProps} ref={provided.innerRef} >
              <Paper className = {classes.root} {...provided.dragHandleProps}>
                <CssBaseline/>
                <ListTitle title={list.title} listId={list.id}/>
                <Droppable droppableId={list.id}>
                  {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
                          {
                            list.cards.map((card, index) => (
                                <TrelloCard key={card.id} card={card} index={index}/>
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

const useStyle = makeStyles(theme => ({
  root: {
    minWidth: "300px",
    backgroundColor: "rgba(255, 255, 255, 0.66)",
    margin: theme.spacing(1),
    padding: "10px",
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}))

export default TrelloList