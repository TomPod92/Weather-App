import React from 'react';
import '../styles/sidePanel.scss'
import iconSet from '../selection.json'
import IcomoonReact from 'icomoon-react'

class SidePanel extends React.Component {
    render() {
        return (
            <div className={this.props.active ? "sidePanel sidePanel--active" : "sidePanel"}>
                SidePanel

            <button className="sidePanel--button" onClick={this.props.handleOpenSidePanel}>
                <IcomoonReact iconSet={iconSet} className="icon" color='#2f84ea' size={'4.5rem'} icon="arrow-left" />    
            </button>
            </div>
        )
    }
}

export default SidePanel