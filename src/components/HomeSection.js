//style
import styled from "styled-components";
import homepage1 from '../img/homepage1.png';
// react router dom
import { Link } from "react-router-dom";

const HomeSection = () => {
    return (
        <HomeWrapper>
            <Content>
                <h2>MATERIAL GIRL <span>.</span></h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi illo voluptates iure, 
                    itaque perspiciatis iste modi saepe illum labore soluta magnam blanditiis excepturi nisi alias voluptate quidem, sint culpa.
                </p>
                <div>
                    <StyledShopLink to="/shop">SHOP</StyledShopLink>
                    <StyledAboutLink to="/about">ABOUT</StyledAboutLink>
                </div>
            </Content>

            <ColourBlock></ColourBlock>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    align-items: center;
`;

const ColourBlock = styled.div`
    grid-column: 2 / 3;
    width: 100%;
    height: 100vh;
    background: #FFD6AF;
    box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.1);
    position: relative;

    &::after {
        content: '';
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: -5%;
        z-index: -3;
        background: #F2F2F2;
        box-shadow: -3px 0px 16px rgba(0, 0, 0, 0.1);
    }

    &::before {
        content: '';
        position: absolute;
        bottom: 5rem;
        left: -11rem;
        width: 65%;
        height: 65%;
        background: url(${homepage1}), no-repeat;
        background-size: cover;
        background-position: center;
        transform: rotate(-7.5deg);
    }
`;

const Content = styled.div`
    width: 50%;
    min-height: 50vh;
    justify-self: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 40%;
        left: -10rem;
        transform: translateY(-40%);
        width: 2px;
        height: 25%;
        background: #000;
    }

    h2 {
        font-size: 4.5rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        width: 100%;
        margin: 1rem 0 3.5rem 0;
        font-size: 1.15rem;
    }

    a {
        color: #000;
        text-decoration: none;
        border: none;
        padding: 0.75rem 2.5rem;
        font-size: 1rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 3px 4px 16px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease;
    }
`;

const StyledShopLink = styled(Link)`
    background: #F2F2F2;
    margin-right: 1.5rem;
`;

const StyledAboutLink = styled(Link)`
    background: #FFD6AF;
`;

export default HomeSection;