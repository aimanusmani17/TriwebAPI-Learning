import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css'

function MainMenu(){
     
    return <header className={MainMenuStyle.header}>
        <nav className="nav">
            
            <ul><Link to="/">Home</Link></ul>
            <ul> <Link to="/About">About</Link></ul>
            <ul> <Link to="/Contact">Contact</Link></ul>
            <ul> <Link to="/Product">Product</Link></ul>
            
        </nav>
        
       
        
    </header>

}
export default MainMenu;