
import React from 'react';
import './App.css';
import Card from './components/Card';

const adblue={backgroundColor:'blue'};
const adgreen={backgroundColor:'green'};
const adred={backgroundColor:'red'};
const adblack={backgroundColor:'black'};
class CardList extends React.Component {
  render() {
      return (
        <React.Fragment>
        <div className ="tariffwrapper">

 <Card 
name="Безлимитный 300" style={adblue}
price={300}style={adblue}
speed={10}
text="Обьем включённого трафика не ограничен" 
 />
 <Card
name="Безлимитный 450"  style={adgreen}
price={450} style={adgreen}
speed={50}
text="Обьем включённого трафика не ограничен" 
 />
  <Card 
isSelected = "selected"
name="Безлимитный 500" style={adred}
price={550}style={adred}
speed={100}
text="Обьем включённого трафика не ограничен" 
 />
  <Card 
name="Безлимитный 1000" style={adblack}
price={1000}style={adblack}
speed={200}
text="Обьем включённого трафика не ограничен" 
 />
 </div>
 </React.Fragment>
 );
 } 
} 
export default CardList;
