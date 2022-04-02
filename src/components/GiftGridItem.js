
import React from 'react'

export const GiftGridItem = ({id, title, url}) => {


  return (
    <div className="container-card animate__fadeInDown">
        <img className=' img.container-card__img container-card__text ' src={ url } alt={title}/>
        <p className='.container-card__text container-header'>{title}</p>
    </div>
  )
}
