import './style.scss';

function PrizeHeading(props) {
    return (
        <div className="PrizeHeading">
            <h1><b>{props.type}</b></h1>
        </div>
    );
}

function FirstPrize(props) {
    return (
        <div className="Prizes">
            {props.icon}
            <h2>{props.type}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export {FirstPrize, PrizeHeading};
