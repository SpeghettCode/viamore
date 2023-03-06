//styles
import styled from "styled-components";
import ourMission from '../img/our-mission.jpg';

//links
import { Link } from "react-router-dom";

const OurMissionSection = () => {
    return (
        <About>
            <Content>
                <div>
                    <h2>OUR MISSION <span>.</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <StyledDonateLink to="#">DONATE</StyledDonateLink>
                </div>
            </Content>

            <ColourBlock></ColourBlock>
        </About>
    );
}

const About = styled.div`
    position: relative;
    margin: 10rem 0;
`;

const Content = styled.div`
    width: 50%;
    height: 85vh;
    background: #FFD6AF;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    position: relative;

    div {
        width: 40%;
        height: 50%;
        margin-left: 7.5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        z-index: 1;
    }

    h2 {
        font-size: 3.75rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        width: 100%;
        margin: 1rem 0;
        font-size: 1.15rem;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 3.5rem;
        transform: translateY(-50%);
        height: 80%;
        width: 50%;
        background: url(${ourMission}), no-repeat;
        background-position: center;
        background-size: cover;

    }
`;

const StyledDonateLink = styled(Link)`
    width: fit-content;
    background: #f2f2f2;
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
        position: absolute;
        z-index: -1;
        left: 15rem;
        top: 3.5rem;
        width: 50%;
        height: 100%;
        background: #f2f2f2;
        box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
`;

export default OurMissionSection;