
import React from 'react';
import './App.css';
import Card from './components/Card';
import ClickableDiv from 'react-clickable-div'


class CardList extends React.Component {
  render() {
      return (
        <React.Fragment>
        <div className ="tariffwrapper">

 <Card 
name="Безлимитный 300" 
price={300} 
speed={10}
text="Обьем включённого трафика не ограничен" 
 />
 <Card
name="Безлимитный 450"
price={450} 
speed={50}
text="Обьем включённого трафика не ограничен" 
 />
  <Card 

name="Безлимитный 500" 
price={550}
speed={100}
text="Обьем включённого трафика не ограничен" 
 />
  <Card 
name="Безлимитный 1000" 
price={1000}
speed={200}
text="Обьем включённого трафика не ограничен" 
 />
 </div>
 </React.Fragment>
 );
 } 
} 
export default CardList;
