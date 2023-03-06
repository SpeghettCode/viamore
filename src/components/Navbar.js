//style
import styled from "styled-components";
//navigation
import { Link } from "react-router-dom";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
            <StyledNav>
                <Link to="/" className="logo">VIA / MORE</Link>

                <ul className="page-nav">
                    <li className="animate">
                        <Link to="/about">ABOUT</Link>
                    </li> 
                    <li className="animate">
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li className="animate">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>

                <ul className="contact-nav">
                    <li>
                        <Link to="/basket"> <FontAwesomeIcon icon={faShoppingBasket} /> <span>BASKET</span></Link>
                    </li>
                </ul>
            </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 10vh;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    gap: 10rem;
    align-items: center;
    padding: 0 5rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
    }

    .logo {
        width: fit-content;
    }

    .contact-nav {

        a {
            font-size: 1.5rem;
        }

        span {
            font-family: 'montserrat', sans-serif;
            margin-left: 0.5rem;
            font-size: 1rem;
        }

        h2 {
            cursor: pointer;
        }

        li {
            margin: 0 0 0 auto;
        }
    }

    .animate {
        position: relative;
        padding: 0.25rem 0.5rem;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            height: 1px;
            background: #000;
            transition: all 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }
    }

`;

export default Navbar;