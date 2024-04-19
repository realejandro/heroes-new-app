import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {
  
  if(alter_ego === characters) return (<></>);

  return <p>{ alter_ego }</p>
}

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  
  //That's the way to use the assets file from the public file
  const heroImagesUrl = `assets/heroes/${id}.jpg`;

  return (
    <div className='card animate__animated animate__fadeIn' style={ {width: "18rem"} } >
        <img src = { heroImagesUrl } className="card-img-top" alt={superhero}/>
        <div className="card-body">
            <h5 className="card-title">{ superhero }</h5>
            <p className="card-text">{ publisher }</p>
            <p className="card-text">{ first_appearance }</p>
            <p className="card-text">{ alter_ego }</p>
            <CharactersByHero characters={ characters } alter_ego = { alter_ego }/>
            <Link to={`/hero/${ id }`} className="btn btn-dark"> 
              More Info 
            </Link>
        </div>
    </div> 
  )
}

export default HeroCard