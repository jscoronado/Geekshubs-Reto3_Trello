import {Paper, CssBaseline, makeStyles} from "@material-ui/core";
import ListTitle from "./ListTitle";
import TrelloCard from "./TrelloCard";
import AddCardList from "./AddCardList";

const TrelloList = () => {
  const classes = uneStyle();
  return (
    <Paper className = {classes.root}>
      <CssBaseline/>
        <ListTitle></ListTitle>
        <TrelloCard></TrelloCard>
        <AddCardList></AddCardList>
    </Paper>
  )
}

const uneStyle = makeStyles(theme => ({
  root: {
    maxWidth: "300px",
    backgroundColor: "#ebecf0",
    margin: theme.spacing(1),
    padding: "10px",
  }
}))

export default TrelloList