import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css'
import FavouriteContext from '../../store/ContextFavourite';
import {useContext} from 'react'

function MainMenu(){

    const favouriteContext = useContext(FavouriteContext);
    const totalFavouriteItem = favouriteContext.favouriteItem.length;
     
    return <header className={MainMenuStyle.header}>
        <nav className={MainMenuStyle.nav}>
            <ul >
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/About">About</Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
            <li> <Link to="/Product">Product</Link></li>
            <li> <Link to="/Product/add">Add Product</Link></li>
            <li className={MainMenuStyle.favCount}><Link to="/Product/favourite" className={MainMenuStyle.link}>{totalFavouriteItem}</Link></li>
            </ul>
            
        </nav>
        
       
        
    </header>

}
export default MainMenu;