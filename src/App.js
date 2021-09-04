
import React from 'react';
import './App.css';
import Card from './components/Card';
import ClickableDiv from 'react-clickable-div'
const style = {backgroundColor : #A9CCE3,backgroundColor : #45B39D, backgroundColor : #E74C3C, backgroundColor : #707B7C}


class CardList extends React.Component {
  render() {
      return (
        <React.Fragment>
        <div className ="tariffwrapper">
        <div onClick={() => {alert("you have chosen this tariff")}}>
 <Card style={{backgroundColor : #A9CCE3}}
hoverable
name="Безлимитный 300" 
price={300} 
speed={10}
text="Обьем включённого трафика не ограничен"
 />
  </div>

  <div onClick={() => {alert("you have chosen this tariff")}}> 
 <Card style={{ backgroundColor : #45B39D}}
 hoverable
name="Безлимитный 450"
price={450} 
speed={50}
text="Обьем включённого трафика не ограничен" 
 />
 </div>

 <div onClick={() => {alert("you have chosen this tariff")}}>
  <Card style={{backgroundColor : #E74C3C}}
   hoverable
name="Безлимитный 550" 
price={550}
speed={100}
text="Обьем включённого трафика не ограничен" 
 />
 </div>

 <div onClick={() => {alert("you have chosen this tariff")}}>
 
  <Card style={{backgroundColor : #707B7C}}
   hoverable
name="Безлимитный 1000" 
price={1000}
speed={200}
text="Обьем включённого трафика не ограничен" 
 />
 </div>
 </div>
 </React.Fragment>
 );
 } 
} 
export default CardList;
