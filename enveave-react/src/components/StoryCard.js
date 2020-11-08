import { Button } from '@material-ui/core'
import React from 'react'
import './StoryCard.css'

function StoryCard({image, title, text}) {
    return (
        <div className='storyCard'>
            <div className='storyCard__box'>
                <div className='storyCard__box__image'>
                    <img src={image} alt='Personal Story'></img>
                </div>
                    <h4>{title}</h4>
                <p>
                    {text}
                </p>
                <Button><span>READ MORE</span></Button>
            </div>
        </div>
    )
}

export default StoryCard
