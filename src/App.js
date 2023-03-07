import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Login from "./mocks/Login";
import AddFriend from "./mocks/AddFriend";
import FriendsList from "./mocks/FriendsList";
import PrivateRoute from "./mocks/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav className="flex gap-2 justify-center text-lg text-blue-600">
        <p>FRİENDS DATABASE</p>
        <Link to="/login" className="p-2 underline">
          LOGIN
        </Link>
        <Link to="/friends" className="p-2 underline">
          FRIENDLİST
        </Link>
        <Link to="/friends/add" className="p-2 underline">
          ADDFRIEN
        </Link>
        <Link to="/logout" className="p-2 underline">
          LOGOUT
        </Link>
      </nav>

      <div className="max-w-sm mx-auto">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route exact path="/friends">
            <FriendsList />
          </Route> */}
          <PrivateRoute exact path="/friends" component={FriendsList} />
          {/* <Route path="/friends/add">
            <AddFriend />
          </Route> */}
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <Route path="/logout" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
