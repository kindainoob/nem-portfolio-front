import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Login from '../Pages/login'
import Events from '../Pages/events'
import Event from '../Pages/event'
import Mypage from '../Pages/mypage'
import Ragistration from '../Pages/registration'


import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

export default () => {

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }


    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <Link to="mypage" className={classes.tab}>
                    <ListItem button>
                        <AccountCircleIcon />
                        マイページ
                    </ListItem>
                </Link>
                <Link to="events" className={classes.tab}>
                    <ListItem button>
                        <DateRangeIcon />
                        イベント一覧
                    </ListItem>
                </Link>
                <Link to="call" className={classes.tab}>
                    <ListItem button>
                        <AddAlertIcon />
                        おしらせ
                    </ListItem>
                </Link>
                <Link to="setting" className={classes.tab}>
                    <ListItem button>
                        <SettingsIcon />
                        設定
                    </ListItem>
                </Link>

            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <div className={classes.header}> Portfolio </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="menu">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Router>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/registration' component={Ragistration} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/events/:id' component={Event} />
                    <Route exact path='/mypage' component={Mypage} />
                </Router>
            </main>
        </div>
    )
}


// Style
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(5)
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    tab: {
        color: "black",
        textDecoration: "none",
    },
    header: {
        color: "#444444",
    }
}));