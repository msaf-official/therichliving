import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EditIcon from "@material-ui/icons/Edit";
// import ListItem from '@material-ui/core/ListItem';

import VisibilityIcon from "@material-ui/icons/Visibility";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import MoneyIcon from "@material-ui/icons/Money";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import ReportIcon from "@material-ui/icons/Report";
import Dashboard from "../Dashboard";
import Footer from "../../Footer/Footer";
import Profile from "../Profile/Profile";
import ChangePassword from "../ChangePassword/ChangePassword"
import Logout from "../Logout/Logout"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#00cc66",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,

  },
}));

export default function DistributorSidebar({ dashboard = false, profile = false, changepass = false, logout = false }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const [openMember, setOpenMember] = useState(false);
  const [openIncome, setOpenIncome] = useState(false);
  const [openWithdrawal, setOpenWithdrawal] = useState(false);

  const [viewProfile, setViewProfile] = useState(false);
  const [active, setActive] = useState();
  const [openChangePass, setOpenChangePass] = useState(false);
  let history = useHistory();
  const handleClickProfile = () => {
    setopenProfile(!openProfile);
    setOpenIncome(false);
    setOpenMember(false);
    setOpenWithdrawal(false);
  };
  const handleClickMember = () => {
    setOpenMember(!openMember);
    setopenProfile(false);
    setOpenIncome(false);
    setOpenWithdrawal(false);
  };

  const handleClickIncome = () => {
    setOpenIncome(!openIncome);
    setopenProfile(false);
    setOpenMember(false);
    setOpenWithdrawal(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickWithdrawal = () => {
    setOpenWithdrawal(!openWithdrawal);
    setopenProfile(false);
    setOpenIncome(false);
    setOpenMember(false);
  };
  const activeList = (name) => {
    setActive(name);
  };

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
            The Rich Living
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />


        <List>

          <ListItem button >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

        </List>
        <Divider />

        <List>
          <>
            <ListItem onClick={handleClickProfile}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />

              {openProfile ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProfile} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  onClick={() => {
                    history.push("/distributor/profile");
                  }}
                >
                  <ListItemIcon >
                    <VisibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary="View profile" />
                </ListItem>
          

                <ListItem button onClick={()=>{
                  setOpenChangePass(!openChangePass);
                }} >
                  <ListItemIcon>
                    <EditIcon />
                    {openChangePass && <ChangePassword  />}
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>
              </List>
            </Collapse>
          </>
     
        </List>
        <List>
          <>
            <ListItem
              onClick={handleClickMember}
              className={active === "name" ? "active" : ""}
            >
              <ListItemIcon onClick={() => activeList("name")}>
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
            <ListItem onClick={handleClickIncome}>
              <ListItemIcon>
                <MoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Income Report" />

              {openIncome ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openIncome} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Direct Income" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Level Income" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single Leg Income" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reward Income" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary="Upgrade Income" />
                </ListItem>
              </List>
            </Collapse>
          </>
          {/* ))} */}
        </List>

        <List>
          <>
            <ListItem onClick={handleClickWithdrawal}>
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
                  <ListItemText primary="Withdrawal fund" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <ReportIcon />
                  </ListItemIcon>
                  <ListItemText primary="Withdrawal Report" />
                </ListItem>
              </List>
            </Collapse>
          </>
          {/* ))} */}
        </List>
        <List>
          <Divider />
          <ListItem button onClick={() => {
            history.push("/distributor/logout")
          }} >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {profile && <Profile />}
        {changepass && <ChangePassword />}
        {dashboard && <Dashboard />}

      </main>
    </div>
  );
}
