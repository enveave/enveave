import React from 'react'
import './ProjectCard.css'
import proj from '../images/Proj1.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

function ProjectCard() {
    return (
        <div className='projectCard'>
            <div className='projectCard__outer'>
                <div className='projectCard__details'>
                    <div className='projectCard__details__image'>
                        <img src={proj} alt='Project'></img>
                    </div>
                    <div className='projectCard__details__heading'>
                        <h4>100 TREES IN 100 PLACES</h4>
                    </div>
                    <div className='projectCard__details__goal'>
                        <h5>We want to plant 100 trees in 100 Indian Villages</h5>
                    </div>
                    <div className='projectCard__details__support'>
                        <FavoriteIcon fontSize='small'/>
                        <h4>1087 SUPPOTERS</h4>
                    </div>
                    <div className='projectCard__details__progress'>
                        <h5>20 Goals Achieved!</h5>
                    </div>
                    <div className='projectCard__details__next'>
                        <CalendarTodayOutlinedIcon fontSize='small'/>
                        <h5>Fundraise in 2 days</h5>
                    </div>
                    <div className='projectCard__details__creater'>
                        <AccountBoxOutlinedIcon fontSize='small'/>
                        <h5>by Kindman</h5>
                    </div>
                </div>
                <div className='projectCard__update'>
                    <CalendarTodayOutlinedIcon fontSize='small'/>
                    <h5>Planted 100 trees in Gunehar</h5>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
