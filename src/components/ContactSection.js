//styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
//img
import model2 from '../img/model2.png';

const ContactSection = () => {

    return (
        <Contact>
            <ColourBlock>
                <Content>
                    <h2>CONTACT US <span>.</span></h2>
                    <div>
                        <h3><FontAwesomeIcon icon={faPhone} /></h3>
                        <p>01746 127643</p>
                    </div>
                    <div>
                        <h3><FontAwesomeIcon icon={faInstagram} /></h3>
                        <p>@VIAMORE</p>
                    </div>
                    <div>
                        <h3><FontAwesomeIcon icon={faMapMarkerAlt} /></h3>
                        <p>
                            760 Mill Lane, <br />
                            MANCHESTER, <br />
                            M68 3LJ
                        </p>
                    </div>
                </Content>
            </ColourBlock>
 
            <ContactFormWrap>
                <form action="#" method="post">
                    <h2>SEND US A MESSAGE</h2>
                    <input type="text" name="name" id="#" placeholder="Your name..." required />
                    <input type="email" name="email" id="#" placeholder="Your email..." required />
                    <textarea name="message" id="#" cols="30" rows="8" placeholder="Your message..." required></textarea>
                    <button type="submit" name="submit">SUBMIT</button>
                </form>
            </ContactFormWrap>
        </Contact>
    )
}

const Contact = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
`;

const ColourBlock = styled.div`
    width: 100%;
    height: 100%;
    background: #FFD6AF;
    box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 5rem;
        width: 25%;
        height: 60%;
        background: url(${model2}), no-repeat;
        background-size: cover;
        background-position: center;
    }
`;

const Content = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;

        &:nth-of-type(3) {
            align-items: stretch;
        }
    }

    h2 {
        font-size: 3.75rem;
        font-family: 'montserrat', sans-serif;
        font-weight: 300;
    }

    p {
        margin: 0 1.5rem;
        font-family: 'montserrat', sans-serif;
        font-size: 1.15rem;
    }

    h3 {
        font-size: 2.15rem;
    }
`;

const ContactFormWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
        width: 60%;
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        h2 {
            font-family: 'montserrat', sans-serif;
            font-size: 1.15rem;
            font-weight: 400;
        }

        input, textarea {
            width: 100%;
            font-size: 1rem;
            padding: 1rem 1.5rem;
            font-family: 'montserrat', sans-serif;
            background: #fff;
            border: none;
            outline: none;
            resize: none;
            box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);

            &::placeholder {
                transition: all 0.1s ease;
            }

            &:focus::placeholder {
                opacity: 0;
            }
        }

        button {
            width: 100%;
            font-size: 1rem;
            padding: 1rem 1.5rem;
            font-family: 'montserrat', sans-serif;
            border: none;
            background: #f2f2f2;
            box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }
    }
`;

export default ContactSection;