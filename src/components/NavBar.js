import * as React from 'react';
import './navbar.sass'

function NavBar(){
    return (
        <header className='grid left-1'>
            <div className='flex header--box'>
                <a href='/' className='h3'>bootcamp.by</a>
                <div>Интенсивные курсы дизайна в Беларуси</div>
                <div>{/*<nav>
                    <a href='courses'>Курсы</a>
                    <a href='about'>О буткемпе</a>
                    <a href='contacts'>Контакты</a>
                    </nav>
            </div>
            <Button
                buttonSize='btn--small'
                >Поступить</Button>*/}</div>
            </div>
        </header>
    )
}

export default NavBar