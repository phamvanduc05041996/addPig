import React from 'react'
// import { NavLink } from 'react-router-dom';
import MyLink from '../MyLink';
import './styles.css';
const Header = () => {
    return (
        <div id='header'>
            <MyLink text={'LOGO'} link='/' customStyles={{
                fontSize: '25px',
                'bold': 'bold',
            }} />

            <div className='header-links'>
                <MyLink text={'Add Pig'} link='/add-pig' />
                <MyLink text={'List Pig'} link='/list-pig' />


            </div>

        </div>
    )
}

export default Header