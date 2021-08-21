import SignIn from "./userjourney/signin";
import SignUp from "./userjourney/signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/AuthorProfile/Profile";
import ProductUpload from "./Pages/ProductUpload/ProductUpload";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/register" component={SignUp} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/product" component={ProductUpload} />
    </Switch>
    </Router>
  );
}

export default App;
