//style
import styled from "styled-components";

import { useLocation, useNavigate } from "react-router-dom";

const ProductPage = () => {

    return (
        <Wrapper>
            <h2>balls</h2>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ProductPage;