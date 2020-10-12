import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import Home from "./pages/Home";
import newTheme from "./theme";
import Room from "./pages/Room";
import Main from "./Layouts/Main";

function LayoutRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <Main>
            { children }
          </Main>
        )
      }}
    />
  );
}

export default function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
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
            <LayoutRoute path="/room/:id">
              <Room />
            </LayoutRoute>
            <LayoutRoute exact path="/">
              <Home />
            </LayoutRoute>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
