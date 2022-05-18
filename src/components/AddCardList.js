import {Collapse, fade, makeStyles, Paper, Typography} from "@material-ui/core";
import { useState } from "react"
import AddCardListText from "./AddCardListText";

const AddCardList = () => {
    const [open, setOpen] = useState(false)
    const classes = uneStyle();
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <AddCardListText></AddCardListText>
            </Collapse>
            <Collapse in={!open}>
                <Paper className = {classes.addCardListText}>
                    <Typography>
                        Se ejecuta cuando esté cerrado
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    )
}

const uneStyle = makeStyles(theme => ({
    root: {
        maxWidth: "300px",
        marginTop: theme.spacing(1),
        padding: "10px",
    },
    addCardListText : {
        padding: theme.spacing(1, 1, 1, 1),
        backgroundColor: "#ebecf0",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: fade("#000", 0.1)
        }
    }
}))

export default AddCardList