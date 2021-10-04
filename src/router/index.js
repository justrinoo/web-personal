import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from '../components/About/intro';
import Me from '../components/About/me';
export default function myComponent() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/me" component={Me} />
        </Switch>
      </Router>
    </>
  );
}
