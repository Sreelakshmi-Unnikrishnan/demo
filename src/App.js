import { BrowserRouter, Route, Switch } from "react-router-dom";
import exp from "./Components/explore/exp";
import ExploreCourse from "./Components/ExploreCourse/ExploreCourse";
import videos from "./Components/showvideos/videos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/exp/" exact component={exp} />
      <Route path="/videos/" exact component={videos} />
      <Route path="/explorecourse/" exact component={ExploreCourse} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
