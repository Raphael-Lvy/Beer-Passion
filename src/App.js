
import './App.css';
import React, { useState } from 'react';
import { Home } from './Components/Home';
import { Shop } from "./Components/Shop";
import { About } from "./Components/About";
import { Navigation } from "./Components/Navigation";
import { Beer } from "./Components/Beer";
import { Cart } from "./Components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import Container from 'react-bootstrap/Container';


function App() {

  const [itemNb, setItemNb] = useState(
    parseInt(localStorage.getItem('itemNbLocal')) || 0
  ); 
  const [beers, setBeers] = useState(
    JSON.parse(localStorage.getItem('beersLocal')) || []
  );

  React.useEffect(() => {
    localStorage.setItem('itemNbLocal', itemNb);
    localStorage.setItem('beersLocal', JSON.stringify(beers)); 
    console.log(beers);
  }, [itemNb, beers]);


  const addItem = (beer) => {
    setItemNb((prev) => (prev + 1));
    if(!beers.includes(beer.id)) {
    setBeers((prev) => ( [beer, ...prev]));}
  }

  const clearCart = () => {
    setItemNb(0);
    setBeers([]);
    localStorage.clear();
  }

  
  return (
    
    <Router>
      <div className="App">
        <Navigation itemNb={itemNb} clearCart={clearCart} />
        <Switch>
          <Container className='top' style={Styles.navTop}>
            <Route path='/' exact component={Home} />
            <Route path='/shop'  exact render={(props) => (<Shop {...props} addItem={addItem} />)} />
            <Route path='/about' exact component={About} />
            <Route path='/shop/:id' render={(props) => (<Beer {...props} addItem={addItem} />)} />
            <Route path='/cart' exact render={(props) => (<Cart {...props} beers={beers} />)} />
          </Container>
        </Switch>
        
        </div>
        <Footer itemNb={itemNb} clearCart={clearCart} />
    </Router>

  );
}

export default App;

const Styles = {
  navTop: {
    marginTop: '15vh',
    marginBottom: '10vh'
  },

  navBottom: {

  }
}

