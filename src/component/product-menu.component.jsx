import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useWindowSize from "../utils/window-size";
import productData from "./data/product-data";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import "./product-menu.styles.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: "100vh",
      "&::-webkit-scrollbar ": {
        width: " 0.2em"
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
      },

      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey"
      }
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    media: {
      height: 250,
      borderRadius: "4px 4px 0 0"
    },
    rootSmall: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "block",
      height: "100vh",
      margin: "0 auto"
    }
  };
});

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const size = useWindowSize();
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    backgroundColor: "#1a1a1d",
    color: "#fff",
    overflowY: "auto",
    overflowX: "hidden"
  };
  const tabsStyle = {
    backgroundColor: "#1a1a1d",
    color: "#fff",
    overflowY: "auto",
    overflowX: "hidden",
    fontSize: "2em"
  };
  return (
    <div
      style={style}
      className={size.width > 1000 ? classes.root : classes.rootSmall}
    >
      <Tabs
        orientation={size.width > 1000 ? "vertical" : "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style={tabsStyle}
      >
        <Tab label="Packing and Seals" {...a11yProps(0)} />
        <Tab label="Gasket" {...a11yProps(1)} />
        <Tab label="Sheets" {...a11yProps(2)} />
        <Tab label="PTFE" {...a11yProps(3)} />
      </Tabs>
      <React.Fragment>
        {Object.keys(productData).map((product, i) => {
          return (
            <TabPanel value={value} index={i} key={Object.keys(productData)[i]}>
              <Grid container spacing={2}>
                {productData[product].map(item => {
                  return (
                    <Grid key={item[Object.keys(item)[0]].id}>
                      <Paper className="product-item">
                        <CardMedia
                          className={classes.media}
                          image={item[Object.keys(item)[0]].ImageSrc}
                          title={Object.keys(item)[0]}//300X250
                        />
                        <h3>{Object.keys(item)}</h3>
                        <p>{item[Object.keys(item)[0]].Description}</p>
                        <h4>Uses</h4>
                        <p>{item[Object.keys(item)[0]].Uses}</p>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </TabPanel>
          );
        })}
      </React.Fragment>
    </div>
  );
}
