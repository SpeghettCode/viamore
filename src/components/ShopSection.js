import { useState } from "react";
// style 
import styled from "styled-components";
//components
import Item from "./Item";
//product data
import Products from "../products";



const ShopSection = () => {

    const [items, setItems] = useState(Products);
    const [shown, setShown] = useState(6);

    //load more items
    const loadMore = () => {
        setShown(shown + 3);
    }
    
    return (
        
        <div>
            <ShopHeaderWrap>
                <div>
                    <h2>Shop</h2>
                    <p>Shop for some great fashion</p>
                </div>
            </ShopHeaderWrap>
            <ShopWrapper>
                {items.slice(0, shown).map(item => <Item name={item.name} desc={item.desc} price={item.price} img={item.img} key={item.id} />)}
            </ShopWrapper>
            <LoadBtnWrap>
                <button onClick={loadMore}>LOAD MORE</button>
            </LoadBtnWrap>
        </div>
    );
}


//styling
const ShopHeaderWrap = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -55vh;
        left: 0;
        width: 100%;
        height: 45vh;
        background: #FFD6AF;
        box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        margin-top: 10rem;
        font-size: 3.75rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        width: 100%;
        margin-top: 1rem;
        font-size: 1.15rem;
    }
`;

const ShopWrapper = styled.div`
    width: 80%;
    margin: 2.5vh auto 0 auto;
    min-height: 5vh;
    margin-top: 2.5vh;
    position: relative;
    z-index: 1;
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 10rem;
    justify-items: center;
`;

const LoadBtnWrap = styled.div`
    width: 100%;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        background: #f2f2f2;
        color: #000;
        text-decoration: none;
        border: none;
        padding: 0.75rem 3.5rem;
        font-size: 1rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.25);
    }
`;

export default ShopSection;