import {Button, fade, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
import React, { useState } from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const AddCardListText = () => {
    const classes = uneStyle();
    const [title, setTitle] = useState("")
    return (
        <div className="addCard">
            <Paper className={classes.newCard}>
                <InputBase
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    placeholder="Introduzca un título para esta tarjeta..."
                    inputProps = {{className: classes.input}}
                    multiline
                />
            </Paper>
            <div className={classes.confirm}>
                <div className={classes.contentConfirm}>
                <Button className={classes.btnConfirm}>Añadir tarjeta</Button>
                    <IconButton>
                        <ClearIcon/>
                    </IconButton>
                </div>
                <IconButton>
                    <MoreHorizIcon/>
                </IconButton>
            </div>
        </div>
    )
}

const uneStyle = makeStyles(theme => ({
    newCard: {
        paddingBottom: theme.spacing(4)
    },
    input: {
        margin: theme.spacing(1)
    },
    confirm: {
        display: "flex",
        margin: theme.spacing(0,1,1,1)
    },
    contentConfirm: {
        flexGrow: 1,
    },
    btnConfirm: {
        background: "#19ad9f",
        color: "#fff",
        "&:hover": {
            backgroundColor: fade("#19ad9f", 0.75)
        }
    }
}))

export default AddCardListText