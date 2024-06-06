import React from 'react';

const Card = ({ name, email, id }) => { // Destructuring the props name, email and id inside of the brackets here
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'> {/* text center, display inline block,  background color, boarder 3, pading 3, margin 2, border width  */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />  {/* Using id from props to generate a unique image */}
            <div>
                <h2>{name}</h2> {/* name, email and id come from Card class parameter used above */}
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
