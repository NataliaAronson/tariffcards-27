import React from 'react' 
import Cardstyle from '.components/Cardstyle';

function Card(props)
 { return ( 
<div className="card">
<div className="card-header">
<h2 className="card-name">{props.name}</h2>
</div>
 <div className="card-body">
 <p className="card-price">рублей{props.price}/мес</p>
 <p className="card-speed">до{props.speed}Мбит/сек</p>
 </div>
 <div className="card-footer">
 <p className="card-text">{props.text}</p>
</div>
 </div>
 </
 );
}
Export default Card;
