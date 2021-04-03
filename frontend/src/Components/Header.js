import React from 'react'
import { Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <header className='header' >
        <Navbar variant='dark' expand="lg" >
               <span
            style={{fontSize:'1rem',fontColor:'black',margin:'0 auto'}}>
            SpaceX Launch Program
            </span>
        </Navbar>
        </header>
    )
}

export default Header
