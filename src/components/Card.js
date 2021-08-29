
import React from 'react';
class Card extends React.Component {
	render() {
const { name, price, speed, text } = this.props;
		return (
            <div className="card">
            <div className="card-header">
            <h2 className="card-name">{name}</h2>
            </div>
             <div className="card-body">
             <p className="card-price">рублей{price}/мес</p>
             <p className="card-speed">до{speed}Мбит/сек</p>
             </div>
             <div className="card-footer">
             <p className="card-text">{text}</p>
	
				</div>
			</div>
		);
	}
}

export default Card;






