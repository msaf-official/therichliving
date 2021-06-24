import React from "react";
import "./Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <CardContent className="root1">
        <Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <DataUsageOutlinedIcon style={{ fontSize: "3rem" }} />
            <h1>Dashbord</h1>
            <Button
              variant="contained"
              color="primary"
              style={{
                position: "fixed",
                right: "50px",
              }}
            >
              Add Member
            </Button>
          </div>
        </Typography>
      </CardContent>
      <Box
        className="news"
        style={{
          borderTop: "2px dashed #8e0000",
          borderBottom: "2px dashed #8e0000",
          backgroundColor: "#e6e6e6",
        }}
      >
        NEWS
        <div
          style={{
            color: "#b30000",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <marquee>Welcome! The rich living </marquee>
        </div>
      </Box>

      <CardContent className="root5">
        <Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <LinkIcon style={{ fontSize: "2rem" }} />
            <h3>Refaral link</h3>

            <a href="http://"> SOMETHING</a>
          </div>
        </Typography>
      </CardContent>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CardContent className="root2 ">
          <GroupOutlinedIcon style={{ fontSize: "3rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            DIRECT MEMBER
          </Typography>

          <Typography>38</Typography>
        </CardContent>

        <CardContent className="root2">
          <TimelineOutlinedIcon style={{ fontSize: "3rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            STATUS
          </Typography>
          <Typography>Active</Typography>
        </CardContent>

        <CardContent className="root3">
          <DateRangeOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            JOINING DATE
          </Typography>

          <Typography style={{ color: "white" }}>26-03-2021</Typography>
        </CardContent>

        <CardContent className="root3">
          <AttachMoneyOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            JOINING AMOUNT
          </Typography>

          <Typography>399</Typography>
        </CardContent>

        <CardContent className="root3">
          <AttachMoneyOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            DIRECT INCOME
          </Typography>

          <Typography>3800</Typography>
        </CardContent>
        <CardContent className="root3">
          <AccountBalanceWalletOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            LEVEL INCOME{" "}
          </Typography>

          <Typography style={{ color: "white", letterSpacing: "1px" }}>
            35545
          </Typography>
        </CardContent>
        <CardContent className="root4">
          <GroupOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            SINGLE LEG TEAM
          </Typography>

          <Typography>15415</Typography>
        </CardContent>
        <CardContent className="root4">
          <GroupOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            SINGLE LEG INCOME
          </Typography>

          <Typography>15415</Typography>
        </CardContent>
        <CardContent className="root4">
          <StarsOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            REWARD INCOME
          </Typography>

          <Typography>0</Typography>
        </CardContent>
        <CardContent className="root4">
          <AccountBalanceWalletOutlinedIcon style={{ fontSize: "2.8rem" }} />
          <Typography style={{ fontWeight: "bold", letterSpacing: "1px" }}>
            TOTAL INCOME
          </Typography>

          <Typography>0</Typography>
        </CardContent>
      </div>
    </>
  );
}
