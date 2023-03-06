// style 
import styled from "styled-components";
//navigation
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterWrap>
            <StyledFooter>
                <ul>
                    <li>
                        <Link to="/" className="home-btn">VIA / MORE</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>

                <p>&copy; VIA / MORE</p>
            </StyledFooter>
        </FooterWrap>
    );
}

const FooterWrap = styled.div`
    width: 100%;
    height: 10vh;
    margin-top: 15rem;
    background: #f2f2f2;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const StyledFooter = styled.footer`
    width: 75%;
    height: 90%;
    background: #FFD6AF;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 0;
    top: -30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    li {
        list-style: none;
        margin-right: 2rem;
    }

    a {
        text-decoration: none;
        font-family: 'montserrat', sans-serif;
        color: #000;
        font-weight: 500;
    }

    .home-btn {
        font-weight: 600;
    }

    p {
        font-family: 'montserrat', sans-serif;
        color: #000000;
    }
`;

export default Footer;