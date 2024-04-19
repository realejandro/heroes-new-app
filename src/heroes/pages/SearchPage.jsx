import React from 'react'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../helpers/getHeroesByName'
import HeroCard from '../components/HeroCard'

const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse( location.search )
  const heroes = getHeroesByName( q ) 

  console.log(q);

  const { searchText, onInputChange } = useForm({
    searchText:''
  })

  const onSearchSubmit = (event) => {
      event.preventDefault();
      navigate( `?q=${ searchText }`.toLocaleLowerCase().trim() )
  }

  return (
    <div>
      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit }>
            <input 
              type='text'
              placeholder='Search Hero'
              className='form-control' 
              autoComplete='off'
              name='searchText'
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className='btn btn-outline-dark mt-1'>
              Search
            </button>

          </form>
        </div>

        <div className='col-6'>
          <h4>Results:</h4>
          <hr/>
          {
            ( q === '' 
            ? <div className='alert alert-dark'> Search Hero </div>
            : (heroes.length === 0) 
            && <div className='alert alert-danger'> There's not result { q } </div>  
            )
          }
          
          {
            heroes.map( hero => 
              <HeroCard key={hero.id} { ...hero }/>)
          }


        </div>
      </div>
    </div>

  )
}

export default SearchPage