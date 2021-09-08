import {Link} from 'react-router-dom'
import '../css/Header.css'
function Header(){
    return(
        <header>
            <nav className="page-header">
                <ul>
                    <li><Link to='/'><button className="btn nav-btn"><span>Home</span></button></Link></li>
                    <li><Link to = '/about'><button className="btn nav-btn"><span>About</span></button></Link></li>
                    <li><Link to='/cities'><button className="btn nav-btn"><span>All Cities</span></button></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header

