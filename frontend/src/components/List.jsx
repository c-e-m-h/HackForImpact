import React from 'react'
import CatProfile from './CatProfile'

export default function List({cats}) {
  return (
    <ul className='list'>
        {
            cats &&
            cats.map((element)=>{
                <CatProfile cat={element}/>
            })
        }
    </ul>
  )
}
