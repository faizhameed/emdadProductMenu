import React from "react";
import "./product-menu.styles.scss";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RubberSheet from "./rubber-sheet/rubber-sheet";
import useWindowSize from "../utils/window-size";

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
      <TabPanel value={value} index={0}>
        <div>
          <img src="" alt="" />
          <h3>Graphite Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Carbon Fiber Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Asbestos Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Fiberglass Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Aramid Fiber Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Ceramic Fiber Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Cotton Fiber Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Ramie Fiber Packing</h3>
          <p>Graphite packings are used for....</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <img src="" alt="" />
          <h3>Rubber Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Ceramic Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Spiral Wound Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Metal Jacketed Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Corrugated Metal Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Machined Metal Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Flat Metal Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Graphite Gasket</h3>
          <p>Graphite packings are used for....</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>EZ-Seal Gasket</h3>
          <p>content will come soon</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <img src="" alt="" />
          <h3>Graphite Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Rubber Sheet</h3>
          <RubberSheet />
        </div>
        <div>
          <img src="" alt="" />
          <h3>Compressed Asbestos Rubber Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Compressed Sheet Asbestos-Free</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Mica Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Cork Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Composite Beater Sheets</h3>
          <p>rubber</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <img src="" alt="" />
          <h3>PTFE Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Rod Sheet</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Film/Tape</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Expanded PTFE Tape/Cord</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>PTFE Gasket</h3>
          <p>rubber</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Filled PTFE Products</h3>
          <p>rubber</p>
        </div>
      </TabPanel>
    </div>
  );
}
