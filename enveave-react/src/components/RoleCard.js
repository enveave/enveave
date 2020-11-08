import { Button } from '@material-ui/core'
import React from 'react'
import './RoleCard.css'

function RoleCard({role, buttonText}) {
    return (
        <div className='roleCard'>
            <div className='roleCard__title'>
                <p>{role}</p>
            </div>
            <div className='roleCard__desc'>
                <p>Soluta velit accusamus atque dolore et voluptatem tempora maiores voluptate.</p>
            </div>
            <div className='roleCard__points'>
                <ul>
                    <li>- maiores voluptate.</li>
                    <li>- maiores voluptate.</li>
                    <li>- maiores voluptate.</li>
                </ul>
            </div>
            <Button>
                <span>{buttonText}</span>
            </Button>
        </div>
    )
}

export default RoleCard
