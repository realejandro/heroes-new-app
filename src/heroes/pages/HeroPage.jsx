import React, { useMemo } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo( () => getHeroById( id ), [id]) ;

  const onNavigateBack = () => {
    navigate(-1);
  }

  if(!hero){
    return <Navigate to={'/'} />
  }

  return (
    <div className='row mt-5'>
       <div className='col-4'>
        <img 
          src={`/assets/heroes/${id}.jpg`}
          alt={ hero.superhero }
          className='img-thumbnail'
        />
        </div> 

        <div className='col-8'>
          <h3>{ hero.superhero }</h3>
          <ul className='list-group list-group-flush'>
            <li className="list-group-item">{hero.alter_ego}</li>
            <li className="list-group-item">{hero.publisher}</li>
            <li className="list-group-item">{hero.first_appearance}</li>
          </ul>

          <h5 className='mt-3'>Characters: </h5>
          <p>{ hero.characters }</p>
          <button className='btn btn-dark btn-outline-light' onClick={ onNavigateBack }> Back </button>
        </div>
    </div>
  )
}

export default HeroPage