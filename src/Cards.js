import React from 'react'


const Cards = (props) =>
{
    const {name, email, id} = props;
    return (
        <React.Fragment>
            <div className = "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">         
            <img alt = "photo" src= {`https://robohash.org/${id}?200x200`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
            </div>
       </React.Fragment>        
    )
}

export default Cards;