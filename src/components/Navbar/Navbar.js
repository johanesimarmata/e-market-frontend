import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap'
import {style} from './Navbar.css'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const EMarketNavbar = () =>{
    const [user, setUser] = useContext(UserContext);

    const logout = async ()  => {
        try{
            await fetch('http://tk.oauth.getoboru.xyz/logout', {
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`, 
                    'Content-Type': 'application/json' 
                }
            });
        } catch(err) {
            console.log(err);
        } 
        finally {
            localStorage.removeItem('user');
            setUser(null);
        }
    }

    return(
        <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" className='navbar-wrapper'>
            <Container>
                <Navbar.Brand href="/">E-Market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/list-produk">Product</Nav.Link>
                    {!user ? (<>
                    <Nav.Link href="/login">Login</Nav.Link></>):(<>
                    <Nav.Link href="#link">Cart</Nav.Link>
                    <Nav.Link href="/e-wallet">E-Wallet</Nav.Link>
                    <Nav.Link href="/order">History</Nav.Link>
                    <Nav.Link href="/delivery-list">Delivery</Nav.Link>
                    </>
                    )
                    }
                </Nav>
                <Nav>
                    {user && <><Nav.Link href="">Rp.500000</Nav.Link>
                    <Nav.Link href="" onClick={logout}> Logout</Nav.Link></>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default EMarketNavbar;