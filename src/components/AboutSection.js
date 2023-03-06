// style
import styled from "styled-components";
import model2 from '../img/model2.png';
// react router dom
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <AboutWrapper>
            <Content>
                <div>
                    <h2>INNOVATIVE FASHION <span>.</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad. Lorem ipsum dolor, sit amet consectetur.
                    </p>
                    <StyledShopLink to="/shop">SHOP</StyledShopLink>
                </div>
            </Content>
            <ColourBlock></ColourBlock>

        </AboutWrapper>
    );
}

const AboutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 92.5vh;
    width: 45%;
    background: #f2f2f2;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 60%;
    }

    h2 {
        font-size: 3.75rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        width: 100%;
        margin: 1rem 0 3rem 0;
        font-size: 1.15rem;
    }
`;

const StyledShopLink = styled(Link)`
    background: #FFD6AF;
    margin-right: 1.5rem;
    color: #000;
    text-decoration: none;
    border: none;
    padding: 0.75rem 3.5rem;
    font-size: 1rem;
    font-family: 'montserrat', sans-serif;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 3px 4px 16px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
`;

const ColourBlock = styled.div`
    width: 55%;
    height: 100%;
    justify-self: right;
    background: #FFD6AF;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 7.5rem;
        width: 40vh;
        height: 75vh;
        background: url(${model2}), no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

export default AboutSection;