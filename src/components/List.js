import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    container: {
        paddingBottom: 25
    },
    primary : {
        color :"#D3D3D3"
    }
}));


const NestedList = ({items}) =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            //     subheader={
            //         <ListSubheader component="div" id="nested-list-subheader">
            //             Nested List Items
            // </ListSubheader>
            //     }
            className={classes.root}
        >

            {items.map((item, index) => {
                return (
                    <ListItem button className={classes.container}>
                        {item.hasOwnProperty('icon') ? <ListItemIcon>
                            {item.icon}
                        </ListItemIcon> : ""}
                        <ListItemText className = {classes.primary} primary={item.title} />
                    </ListItem>
                )
            })}
        </List>
    );
}

export default NestedList
