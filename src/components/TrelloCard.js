import {Paper, makeStyles} from "@material-ui/core";

const TrelloCard = ({card}) => {
    const classes = uneStyle();
    return (
        <Paper className={classes.trelloCard}>
            <h3>{card.title}</h3>
        </Paper>
    )
}

const uneStyle = makeStyles(theme => ({
    trelloCard: {
        padding: theme.spacing(1),
        margin: theme.spacing(1)
    },
}))

export default TrelloCard