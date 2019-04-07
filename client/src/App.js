import EduOrgs from './components/EduOrgs';
import './App.css';
import axios from 'axios';
import EduOrgApp from './EduOrgApp';
import EduOrg from './EduOrg';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';

class App extends Component {

  render(){
    return(
      <Router>

      <div className = 'App'>
      <Header/> 
      <Route exact path = "/eduorg" component = {EduOrgApp}/> {/*Educational Organizations */}
      <Route exact path = "/masterclass" component = {EduOrg}/>{/*MaterClasses */}
      
      </div>

      </Router>

    )}
  }
export default App;
