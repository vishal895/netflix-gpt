import React from 'react'
import { img_cdn } from '../../../utlis/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-48 pr-3'>
        <img src={img_cdn + posterPath} alt='movie card'/>
    </div>
  )
}

export default MovieCard