import {Paper, makeStyles} from "@material-ui/core";
import {Draggable} from "react-beautiful-dnd";

const TrelloCard = ({card, index}) => {
    const classes = uneStyle();
    return (
        <Draggable draggableId={card.id} index={index}>
            {
                (provided) => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <Paper className={classes.trelloCard}>
                            <h3>{card.title}</h3>
                        </Paper>
                    </div>
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