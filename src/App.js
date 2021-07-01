import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/homePage';
import DetailsPage from './components/detailsPage';
import FavoritesPage from './components/favoritesPage';
import { Provider } from 'react-redux';
import store from './redux/store';




function App() {
  return (
    <Provider store = {store}>  
     <Router>
         <Switch>
             <Route exact path = "/" component = {HomePage}/>
             <Route path = "/pokemon/:id" component = {DetailsPage}/>
             <Route path = "/favorites" component = {FavoritesPage}/>                
        </Switch>
    </Router>
    </Provider>
  );
}



export default App;
