import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css'

function MainMenu(){
     
    return <header className={MainMenuStyle.header}>
        <nav >
            <ul>
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
            <li> <Link to="/Product">Product</Link></li>
            <li> <Link to="/Product/add">Add Product</Link></li>
            </ul>
            
        </nav>
        
       
        
    </header>

}
export default MainMenu;