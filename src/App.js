import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import Home from "./pages/Home";
import newTheme from "./theme";
import Room from "./pages/Room";

export default function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/room/:id">
              <Room />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
