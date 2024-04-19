import React, { useMemo, useState } from 'react'
import HeroCard from './HeroCard'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'


const HeroesList = ({ publisher }) => {
  
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);
  
  return (
    <div>
        <div>
            { 
                heroes.map( (hero) => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }  
                    />
                ))
                    
             }
        </div>
    </div>
  )
}

export default HeroesList