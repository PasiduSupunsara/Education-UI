import React from "react"
import { Link, useLocation} from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';


export const Navbar = () => {
    const location = useLocation();

    const isLinkActive = (path) => {
        return location.pathname === path;
    };

    const activeStyle = {
        color: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: ' #00cc66',
      };

    return(
        <nav className="navbar">
            <text className="navTopic">Known</text>
            <ul className="notification">
                <Link to="/" className="link" style={isLinkActive('/') ? activeStyle : {}}>Home</Link>
                <Link to="/About"className="link" style={isLinkActive('/About') ? activeStyle : {}}>About</Link>
                <Link to="/OurTeachers"className="link" style={isLinkActive('/OurTeachers') ? activeStyle : {}}>Our Teachers</Link>
                <Link to="/Courses"className="link" style={isLinkActive('/Courses') ? activeStyle : {}}>Courses</Link>
                <Link to="/Reviews"className="link" style={isLinkActive('/Reviews') ? activeStyle : {}}>Reviews</Link>
                <Link to="/Contact"className="link" style={isLinkActive('/Contact') ? activeStyle : {}}>Contact</Link>                
            </ul>
            <text className="user">{<UserOutlined />}   +94763940975845</text>
        </nav>
    )
};