import {Paper, CssBaseline, makeStyles} from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardList from "./AddCardList";

const TrelloList = ({list}) => {
  const classes = uneStyle();
  return (
    <Paper className = {classes.root}>
      <CssBaseline/>
        <ListTitle title={list.title} listId={list.id}/>

        {
          list.cards.map(card => (
              <TrelloCard card={card} key={card.id}/>
          ))
        }

        <AddCardList type="card"></AddCardList>
    </Paper>
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