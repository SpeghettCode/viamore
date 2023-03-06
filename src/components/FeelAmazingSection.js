//style
import styled from "styled-components";
import model1 from '../img/model1.jpg';
// react router dom
import { Link } from "react-router-dom";

const FeelAmazingSection = () => {
    return (
        <FeelAmazingWrap>
            <Container>
                <Content>
                    <h2>FEEL AMAZING <span>.</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi illo voluptates iure, 
                        itaque perspiciatis iste modi saepe illum labore.
                    </p>
                    <Link to="/shop">SHOP</Link>     
                </Content>
            </Container>
        </FeelAmazingWrap>
    );
}

const FeelAmazingWrap = styled.div`
    width: 100%;
    height: 100vh;
`;

const Container = styled.div`
    width: 55%;
    height: 100%;
    margin: 10% 0;
    justify-self: center;
    background: #FFD6AF;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    margin-left: 10rem;
    margin-top: 15rem;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -5rem;
        left: -10rem;
        width: 90%;
        height: 102.5%;
        background: #F2F2F2;
        box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 3rem;
        transform: translateY(-50%);
        width: 55%;
        height: 80%;
        background: url(${model1}), no-repeat;
        background-position: center;
        background-size: cover;
    }

    h2 {
        font-size: 4.5rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        width: 100%;
        margin: 1rem 0 2rem 0;
        font-size: 1.15rem;
    }

    a {
        color: #000;
        text-decoration: none;
        background: #F2F2F2;
        margin-right: 1.5rem;
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

const Content = styled.div`
    width: 50%;
    height: 50%;
    margin-left: 7.5rem;
    position: relative;
    z-index: 1;

    p {
        width: 90%;
    }
`;

export default FeelAmazingSection;