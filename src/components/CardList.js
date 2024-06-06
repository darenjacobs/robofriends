import React from 'react';
import Card from './Card';


const CardList = ( { robots }) => {
    return (
      <div>
        { // Anything within the Curly Brackets is Javascript
          robots.map((robots, index) => {
            return (
              <Card
                key={index}
                id={robots.id}
                name={robots.name}
                email={robots.email}
              />
            )
          })
        }
      </div>
    );
}

export default CardList;


/*
  <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
  or
  <Card key={index} id={Robots[index].id} name={Robots[index].name} email={Robots[index].email}/>
*/
