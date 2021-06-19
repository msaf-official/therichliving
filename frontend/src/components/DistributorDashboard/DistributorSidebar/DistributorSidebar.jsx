import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
// import ListItem from '@material-ui/core/ListItem';

import VisibilityIcon from '@material-ui/icons/Visibility';
import PeopleIcon from '@material-ui/icons/People';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import MoneyIcon from '@material-ui/icons/Money';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ReportIcon from '@material-ui/icons/Report';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    cursor:'pointer'
  },
  appBar: {
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
    whiteSpace: 'nowrap',
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
}));

export default function DistributorSidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const [openMember,setOpenMember] = useState(false);
  const [openIncome,setOpenIncome] = useState(false);
  const [openWithdrawal,setOpenWithdrawal]=useState(false);

  const handleClickProfile = () => {
    setopenProfile(!openProfile);
  };
  const handleClickMember = () => {
    setOpenMember(!openMember);
  };

  const handleClickIncome = () => {
    setOpenIncome(!openIncome);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickWithdrawal =()=>{
    setOpenWithdrawal(!openWithdrawal)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          {['Dashboard', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DashboardIcon /> : <ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
          <List>
           <>
            <ListItem  onClick={handleClickProfile}>
            <ListItemIcon>
            <PersonIcon />
           </ListItemIcon>
            <ListItemText primary="Profile" />
           
             
        {openProfile ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={openProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <VisibilityIcon />
          
            </ListItemIcon>
            <ListItemText primary="View profile" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <EditIcon />
          
            </ListItemIcon>
            <ListItemText primary="Edit Account Detail" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Change Password" />
            
          </ListItem>
        </List>
      </Collapse>
      </>
          {/* ))} */}
        </List>
        <List>
         
         <>
         <ListItem  onClick={handleClickMember} >
            <ListItemIcon>
            <PeopleIcon />
           </ListItemIcon>
            <ListItemText primary="All Memebers" />
        
   {openMember ? <ExpandLess /> : <ExpandMore />}
 </ListItem>
   <Collapse in={openMember} timeout="auto" unmountOnExit>
   <List component="div" disablePadding>
     <ListItem button className={classes.nested}>
       <ListItemIcon>
         <DirectionsWalkIcon />
     
       </ListItemIcon>
       <ListItemText primary="Direct Member" />
       
     </ListItem>
     <ListItem button className={classes.nested}>
       <ListItemIcon>

         <PeopleOutlineIcon />
     
       </ListItemIcon>
       <ListItemText primary="My Level Team" />
       
     </ListItem>
  
   </List>
 </Collapse>
 </>
     {/* ))} */}
   </List>
    
    <List>
           <>
            <ListItem  onClick={handleClickIncome} >
            <ListItemIcon>
            <MoneyIcon />
           </ListItemIcon>
            <ListItemText primary="Income" />
           
             
        {openIncome ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={openIncome} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Direct Income Report" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Level Income Report" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Single Leg Income Report" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Reward Income" />
            
          </ListItem>
        </List>
      </Collapse>
      </>
          {/* ))} */}
        </List>
        
    
    <List>
           <>
            <ListItem  onClick={handleClickWithdrawal}>
            <ListItemIcon>
            <TransferWithinAStationIcon />
           </ListItemIcon>
            <ListItemText primary="Withdrawal" />
           
             
        {openWithdrawal ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={openWithdrawal} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
          
            </ListItemIcon>
            <ListItemText primary="Withdrawl fund" />
            
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ReportIcon />
             
            </ListItemIcon>
            <ListItemText primary="Widthdrawl Report" />
            
          </ListItem>
        
        </List>
      </Collapse>
      </>
          {/* ))} */}
        </List>
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
