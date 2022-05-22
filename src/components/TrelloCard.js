import {Paper, makeStyles} from "@material-ui/core";
import {Draggable} from "react-beautiful-dnd";
import TrelloList from "./TrelloList";
import AddCardList from "./AddCardList";

const TrelloCard = ({card, index}) => {
    const classes = uneStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
            {
                (provided) => (
                    <Paper className={classes.trelloCard}>
                        <h3>{card.title}</h3>
                    </Paper>
                )
            }
        </Draggable>
    )
}

const uneStyle = makeStyles(theme => ({
    trelloCard: {
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
}))

export default TrelloCard