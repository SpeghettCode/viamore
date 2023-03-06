//style
import styled from "styled-components";
//img
import bag from '../img/bag.png';
import shoes from '../img/shoes.png';
import bag2 from '../img/bag2.png';

const MiniShopSection = () => {
    return (
        <MiniShopWrap>
            <MiniShop>
                <Item>
                    <img src={bag} alt="a green bag" />
                    <div>
                        <h2>GREEN BAG</h2>
                        <p>A green bag</p>
                        <h3>£600</h3>
                    </div>
                </Item>

                <Item>
                    <img src={shoes} alt="white shoes" />
                    <div>
                        <h2>WHITE SHOES</h2>
                        <p>White shoes</p>
                        <h3>£350</h3>
                    </div>
                </Item>

                <Item>
                    <img src={bag2} alt="a brown bag" />
                    <div>
                        <h2>BROWN BAG</h2>
                        <p>A brown bag</p>
                        <h3>£800</h3>
                    </div>
                </Item>
            </MiniShop>
        </MiniShopWrap>
    );
}

const MiniShopWrap = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    align-items: center;
    margin: 10rem 0;
`;

const MiniShop = styled.div`
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

    img {
        width: 20rem;
        height: 20rem;

        &[alt="a brown bag"] {
            transform: rotate(65.92deg);
            margin-left: 2rem;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        h2 {
            font-family: 'montserrat', sans-serif;
        }

        p {
            margin: 0.5rem 0 2.5rem 0;
            font-weight: 600;
        }
    }
`;

export default MiniShopSection;