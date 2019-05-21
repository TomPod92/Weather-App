import React from 'react'
import iconSet from '../selection.json'
import IcomoonReact from 'icomoon-react'
import '../styles/header.scss'

const Header = (props) => {
    return (
        <header className="header">
            <button className="header--button" onClick={props.handleOpenSidePanel}>
                <IcomoonReact iconSet={iconSet} className="icon" color='#f7f7f7' size={'4rem'} icon="arrow-right" />    
            </button>

            <div className='header--spacer'></div>

            <div className="header--logo">
                <IcomoonReact iconSet={iconSet} color="#f7f7f7" size={'6rem'} icon="soundcloud" />    
            </div>

            <h1 className="header--title">Weather App</h1>  

            <div className='header--spacer'></div>
        </header>
    )
}

export default Header;