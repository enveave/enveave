import React from 'react'
import './CategoryCard.css'

function CategoryCard({name, image}) {
    return (
        <div className='categoryCard'>
            <div className='categoryCard__box'>
                <img src={image} alt={name}></img>
            </div>
            <div className='categoryClass__name'>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default CategoryCard
