// "Fog & Field" — Nordic Atmospheric Minimalism
// Photography Portfolio — Main App with routing

import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Improvement from "./pages/Improvement";
import About from "./pages/About";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/analysis" component={Analysis} />
      <Route path="/improvement" component={Improvement} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <ErrorBoundary>
      <WouterRouter base={base}>
        <div className="grain-texture">
          <Routes />
        </div>
      </WouterRouter>
    </ErrorBoundary>
  );
}

export default App;
