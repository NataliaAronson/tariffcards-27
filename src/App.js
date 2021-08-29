
import React from 'react' 
 import Card from '.components/Card';
 import Cardstyle from '.tariffcards/components/Cardstyle.css';
 class CardList extends React.Component { 
render() {
 return (
 <React.Fragment>
 <Card style={{backgroundColor:#61dafb}}
name="Безлимитный 300" 
price={300}
speed={10}
text="Обьем включённого трафика не ограничен" 
 />
 <Card style={{}}
name="Безлимитный 450" 
price={450}
speed={50}
text="Обьем включённого трафика не ограничен" 
 />
  <Card style={{}}
name="Безлимитный 500" 
price={550}
speed={100}
text="Обьем включённого трафика не ограничен" 
 />
  <Card style={{}}
name="Безлимитный 1000" 
price={1000}
speed={200}
text="Обьем включённого трафика не ограничен" 
 />

 </React.Fragment>
 );
 } 
} 
export default CardList;
