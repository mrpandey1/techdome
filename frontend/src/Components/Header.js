import React from 'react'
import { Navbar} from 'react-bootstrap'
const Header = () => {
    return (
        <header className='header' >
        <Navbar variant='dark' expand="lg" >
               <span
            style={{fontSize:'1rem',fontColor:'black',margin:'0 auto'}}>
            SpaceX Launch Program
            </span>
        <button class='hireme'><a style={{textDecoration:'none'}} href='https://www.linkedin.com/in/nishant-pandey-531211165/'>Hire me</a></button>
        </Navbar>
        </header>
    )
}

export default Header
