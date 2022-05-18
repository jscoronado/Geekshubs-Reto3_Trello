import {Button, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
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
                <Button>Añadir tarjeta</Button>
                <IconButton>
                    <ClearIcon/>
                </IconButton>
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
    }
}))

export default AddCardListText