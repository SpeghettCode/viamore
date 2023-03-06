import styled from "styled-components";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMoneyBillWave, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
    return (
        <ServicesWrap>
            <Services>
                <Item>
                    <div>
                        <h2>QUALITY MATERIALS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
                        <h3><FontAwesomeIcon icon={faStar} /></h3>
                    </div>
                </Item>

                <Item>
                    <div>
                        <h2>AFFORDABLE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                        <h3><FontAwesomeIcon icon={faMoneyBillWave} /></h3>
                    </div>
                </Item>

                <Item>
                    <div>
                        <h2>ENVIROMENTALLY FRIENDLY</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h3><FontAwesomeIcon icon={faGlobeAmericas} /></h3>
                    </div>
                </Item>
            </Services>
        </ServicesWrap>
    );
}

const ServicesWrap = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    align-items: center;
    margin: 15rem 0 10rem 0;
`;

const Services = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    gap: 8.5rem;
    align-items: center;
`;

const Item = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #fff;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;

        h2 {
            font-family: 'montserrat', sans-serif;
            width: 50%;
        }

        p {
            margin: 2rem 0 5rem 0;
            font-weight: 600;
            width: 75%;
        }

        h3 {
            font-size: 12.5rem;
        }
    }
`;

export default ServicesSection;