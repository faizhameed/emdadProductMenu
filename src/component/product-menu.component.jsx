import React from "react";
import "./product-menu.styles.scss";
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
      height: "100vh"
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    },
    rootSmall: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "block",
      height: 10,
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

  return (
    <div className={size.width > 1000 ? classes.root : classes.rootSmall}>
      <Tabs
        orientation={size.width > 1000 ? "vertical" : "horizontal"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Packing and Seals" {...a11yProps(0)} />
        <Tab label="Gasket" {...a11yProps(1)} />
        <Tab label="Sheets" {...a11yProps(2)} />
        <Tab label="PTFE" {...a11yProps(3)} />
      </Tabs>
      <React.Fragment>
        {Object.keys(productData).map((product, i) => {
          return (
            <TabPanel value={value} index={i}>
              <Grid container spacing={2}>
                {productData[product].map(item => {
                  return (
                    <Grid>
                      <Paper className="product-item">
                        <img src="" alt="" />
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
