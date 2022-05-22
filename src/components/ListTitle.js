import {InputBase, makeStyles, Typography} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {useContext, useState} from "react";
import ContextAPI from "../ContextAPI";

const ListTitle = ({title, listId}) => {
    const classes = uneStyle();
    const [open, setOpen] = useState(true);
    const [newTitle, setNewTitle] = useState(title);
    const {updateListTitle} = useContext(ContextAPI);

    const updateTitle = () => {
        updateListTitle(newTitle, listId)
        setOpen(false)
    }
    return (

        <>
            { open ? (
                <InputBase
                    value={newTitle}
                    onChange={e=>setNewTitle(e.target.value)}
                    autoFocus
                    fullWidth
                    onBlur={updateTitle}
                    inputProps={{className: classes.input}}
                />
            ) : (
                <div className={classes.title}>
                    <Typography className={classes.titleText} onClick={() => setOpen(true)}>
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