import { BrowserRouter, Route, Switch } from "react-router-dom";
import exp from "./Components/explore/exp";
import ExploreCourse from "./Components/ExploreCourse/ExploreCourse";
import Module from "./Components/ExploreModule/Module";
import Login from "./Components/Login/Login";
import PurchasedCourse from "./Components/PurchasedCourse/PurchasedCourse";
import Register from "./Components/Register/Register";
import videos from "./Components/showvideos/videos";
import Video from "./Components/WatchVideo/Video";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/exp/" exact component={exp} />
      <Route path="/videos/" exact component={videos} />
      <Route path="/explorecourse/" exact component={ExploreCourse} />
      <Route path="/module/" exact component={Module} />
      <Route path="/watch/video/:id" exact component={Video} />
      <Route path="/purchasedcourse/" exact component={PurchasedCourse} />
      <Route path="/register/" exact component={Register} />
      <Route path="/login/" exact component={Login} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
