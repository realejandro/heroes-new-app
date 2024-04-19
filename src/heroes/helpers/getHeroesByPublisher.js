import { heroes } from "../data/heroes"


export const getHeroesByPublisher = ( publisher ) => {
  
    const validPublisher = ['DC Comics' , 'Marvel Comics']

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not available`)
    }

    return heroes.filter( hero => hero.publisher === publisher );
}

