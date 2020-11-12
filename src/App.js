import './App.scss';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import DashContainer from './components/DashContainer';
import ProjectsContainer from './components/ProjectsContainer';
import MytasksContainer from './components/MytasksContainer';
import ReportContainer from './components/ReportContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     <Switch>
          <Route exact path="/" component={DashContainer} />
          <Route path="/projects" component={ProjectsContainer}/>
          <Route path="/mytasks" component={MytasksContainer}/>
          <Route path="/report" component={ReportContainer}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
