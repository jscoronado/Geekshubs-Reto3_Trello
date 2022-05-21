import {Button, fade, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
import React, { useState } from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const AddCardListText = ({type, setOpen}) => {
    const classes = uneStyle();
    const [title, setTitle] = useState("")
    return (
        <div className="addCard">
            <Paper className={classes.newCard}>
                <InputBase
                    value={title}
                    onBlur={()=>setOpen(false)}
                    onChange={e=>setTitle(e.target.value)}
                    placeholder=
                    {
                        type === "card"
                            ?"Introduce un título para esta tarjeta..."
                            : "Introduce un título de lista..."
                    }
                    inputProps = {{className: classes.input}}
                    multiline
                />
            </Paper>
            <div className={classes.confirm}>
                <div className={classes.contentConfirm}>
                <Button className={classes.btnConfirm}>
                    {
                        type === "card"
                            ?"Añadir Tarjeta"
                            : "Añadir Lista"
                    }
                </Button>
                    <IconButton onClick={() => setOpen(false)} >
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
        paddingBottom: theme.spacing(4),
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