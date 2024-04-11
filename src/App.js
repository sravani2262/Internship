import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import JoinUs from './components/JoinUs';
import Classes from './components/Classes';
import AboutUs from './components/AboutUs'; 
import Products from './components/Products';
import Profile from './components/Profile';
import Cart from './components/Cart';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={JoinUs} />
        <Route path="/classes" component={Classes} />
        <Route path="/products" component={Products} />
        <Route path="/AboutUs" component={AboutUs} /> {/* Corrected path for AboutUs component */}
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
