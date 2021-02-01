import logo from './logo.svg';
import Register from "./screens/config1";
import Connection from "./screens/config2"
import theme from "./theme"
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import Res
import ResultComponent from "./screens/Results/index";
import Calendar from "./screens/Calendar/index"

import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import './App.css';

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#323232"
    },
    text: {
      primary: "#ffffff"
    }
  },
  overrides: {
    MuiFormLabel: {
      focused: true,
      root: {
        color: 'white'

      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: "#ffffff"
      }
    },
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
});

const App = () => {
  return (

    <MuiThemeProvider theme={themeDark}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/configuration" component={Register} />
          <Route path="/connection" component={Connection} />
          <Route path="/results" component={ResultComponent} />
          <Route path="/result-page-wheel" component={ResultComponent} />
          {/* <Route path="/calendar" component={Calendar} /> */}
          <LandingPage />
        </Switch>
      </Router>
      {/* <ResultComponent /> */}
    </MuiThemeProvider>
  );
}

export default App;


