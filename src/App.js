import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ExaminationDetails from "./pages/Dashboard/ExaminationDetails";
import Examinations from "./pages/Dashboard/Examinations";
import Registrants from "./pages/Dashboard/Registrants";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

function App() {
  const colors = {
    brand: {
      500: "#0B1462",
    },
    grey: {
      500: "#D9D9D9",
    },
  };

  const theme = extendTheme({ colors });

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/verification">
            <Verification />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/examinations">
            <Examinations />
          </Route>
          <Route exact path="/dashboard/examinations/:id">
            <ExaminationDetails />
          </Route>
          <Route exact path="/dashboard/registrants">
            <Registrants />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
