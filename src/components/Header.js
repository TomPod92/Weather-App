import React from 'react'
import iconSet from '../selection.json'
import IcomoonReact from 'icomoon-react'
import '../styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header--logo">
                <IcomoonReact iconSet={iconSet} color="#f7f7f7" size={'4.5rem'} icon="soundcloud" />    
            </div>

            <h1 className="header--title">Weather App</h1>
        </header>
    )
}

export default Header;