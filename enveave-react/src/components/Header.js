import React from 'react'
import "./Header.css"
import { Search, Person } from "@material-ui/icons"
import { IconButton } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h2>ENVEAVE</h2>
            </div>
            <div className="header__right">
                <div className="header__right__options">
                    <h4>About</h4>
                    <h4>Citizens' Initiatives</h4>
                    <h4>Helping Communtities</h4>
                </div>
                <div className="header__right__icons">
                    <IconButton>
                        <Search/>
                    </IconButton>
                    <IconButton>
                        <Person/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
