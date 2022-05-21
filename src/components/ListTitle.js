import {InputBase, makeStyles, Typography} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {useState} from "react";

const ListTitle = ({title, listId}) => {
    const classes = uneStyle();
    const [open, setOpen] = useState(true);
    const [newTitle, setNewTitle] = useState(title);
    return (

        <>
            { open ? (
                <InputBase
                    value={newTitle}
                    onChange={e=>setNewTitle(e.target.value)}
                    autoFocus
                    fullWidth
                    inputProps={{className: classes.input}}
                />
            ) : (
                <div className={classes.title}>
                    <Typography className={classes.titleText}>
                        <h3>{title}</h3>
                    </Typography>
                    <MoreHorizIcon/>
                </div>
            )}

        </>


    )
}

const uneStyle = makeStyles(theme => ({
    title: {
        display: "flex"
    },
    titleText: {
        flexGrow: "1"
    },
    input: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus": {
            background: "#ccc"
        }
    }
}))

export default ListTitle