import {makeStyles, Typography} from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const ListTitle = () => {
    const classes = uneStyle();
    return (
        <div className={classes.title}>
            <Typography className={classes.titleText}>
                <h3>Tareas</h3>
            </Typography>
            <MoreHorizIcon/>
        </div>
    )
}

const uneStyle = makeStyles(theme => ({
    title: {
        display: "flex",
    },
    titleText: {
        flexGrow: "1"
    }
}))

export default ListTitle