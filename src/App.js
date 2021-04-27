import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';


function App() {
  return (
    <div class="wrapper">
      <ArrowRight  className="ml-4"/>
      <Icon.ArrowRight />
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;