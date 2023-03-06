import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Item = ({name, desc, price, img}) => {

    const navigate = useNavigate();
    // console.log(name);

    const openItem = () => {
        const data = name;
        console.log(name);
        navigate('/ProductPage', {data: data});
    }

    const data = [name, desc, price, img];

    return (
        <Wrapper to={{pathname: `/ProductPage/${name}`, state: data}}>
            <img src={require(`../img/${img}.png`)} alt={desc} />
            <div>
                <h2>{name}</h2>
                <p>{desc}</p>
                <h3>{price}</h3>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled(Link)`
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: #fff;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
    color: #000;
    text-decoration: none;

    img {
        max-height: 20rem;
        max-width: 20rem;
        width: 80%;
        height: 75%;
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

export default Item;