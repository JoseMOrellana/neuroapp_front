import React from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, ListItemIcon} from '@material-ui/core/';
import { Avatar, MenuItem, Grid, Menu, useScrollTrigger, makeStyles, useTheme} from '@material-ui/core/';

import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import logo from '../../../img/MD1.svg';

import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  appBar: {      
    background : '#444444',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
      marginTop: theme.spacing(3.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imagen: {
    maxWidth: 160,
    maxHeight: 100,
    flexGrow: 1,
    margin: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      width: '250px',
      height: '93px',
      margin: 'auto',
    },
  },
  items :{
    [theme.breakpoints.down('md')]: {
        display: 'none',
      },
  },
  mbutton:{
    color:'black',
    display: 'flex',
   },
   sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  subtitlem :{
    fontSize: 'subtitle', 
    color: 'black',
    align: 'center',
    justifyContent: 'center',
  },
  subtitle :{
    fontSize: 'subtitle', 
    color: 'white',
  }
}));
function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [log] = React.useState(false)
  const token = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openu = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const userDrawer =(
      <div>
         <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
            <ListItem>
            <ListItemIcon><Avatar alt="User Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /></ListItemIcon>
            <ListItemText
            primary='Nombre Apellido'
            secondary='Usuario'
            />
            </ListItem>
            </List>
<Divider />
<List>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Historias'/>
</ListItem>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Investigacion'/>
</ListItem>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Medicamentos'/>
</ListItem>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Examenes'/>
</ListItem>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Noticias'/>
</ListItem>
</List>
<Divider/>
<List>
<ListItem button >
      <ListItemIcon>
          <MailIcon/>
      </ListItemIcon>
      <ListItemText primary='Configuracion'/>
</ListItem>
        <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Cerrar Sesion'/>
        </ListItem>
    </List>
    </Drawer>
    </div>
  );
    const adminDrawer =(
    <div>
        <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
        >
            <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <Divider />
        <div>
            <List>
            <ListItem>
            <ListItemIcon><Avatar alt="Admin Sharp" src="/static/images/avatar/1.jpg" className={classes.large} /></ListItemIcon>
            <ListItemText
            primary='Nombre Apellido'
            secondary='Administrador'
            />
            </ListItem>
            </List>
            <Divider />
            <List>
            <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Usuarios'/>
            </ListItem>
            <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Medicamentos'/>
            </ListItem>
            <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Examenes'/>
            </ListItem>
            <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Noticias'/>
            </ListItem>
            </List>
            <Divider/>
            <List>
            <ListItem button >
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary='Configuracion'/>
            </ListItem>
                <ListItem button >
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Cerrar Sesion'/>
                </ListItem>
            </List>
        </div>
  </Drawer>
</div>
);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <List>
      <NavigationItems style={classes.subtitlem}/>
      </List>  
        {token ? (
            <div>
            <MenuItem onClick={handleMenu}>
              <IconButton
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Perfil</p>
              </MenuItem>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openu}
                onClose={handleClose}
              >
                <NavigationItem link="./logout" style='subtitlem'>Salir</NavigationItem>
                <NavigationItem link="./profile" style='subtitlem'>My account</NavigationItem>
            </Menu>
            </div>
          ): null }
    </Menu>
  );
  return (
    <React.Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {log ? (<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>) : (<IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>)}
          <img src={logo} className={classes.imagen} onClick={event => window.location.href='/'} alt='logo'/>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.items} >
            <NavigationItems style='subtitle'/>
          </Grid>
          <div className={classes.sectionMobile}>
                        <IconButton
                            className={classes.mbutton}
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <DehazeIcon/>
                        </IconButton>
                        <IconButton edge='end'
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <DehazeIcon/>
                        </IconButton>
                    </div>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      {renderMobileMenu}
      {/*{log ? adminDrawer : userDrawer }*/}
      <div className={classes.toolbar} />
    </div>
    </React.Fragment>
  );
}
