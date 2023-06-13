import styled from "styled-components";
import { flex } from "../../utils/flex";
import { adaptiveValue, colors, fonts } from "../../utils/variable";

const ContactWrapper = styled.div`
    width: 100%;
    ${flex.center};
    background-color: ${colors.secondaryColor};
   ${adaptiveValue("padding-top", 64, 32)};
   ${adaptiveValue("padding-bottom", 56, 32)};
   ${adaptiveValue("margin-top", 96, 36)};
`;

const ContactContent = styled.div`
    max-width: 748px;
    width: 100%;
    ${flex.justFlex};
    ${flex.center}
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
`;

const ContactForm = styled.form`
    width: 100%;
    ${flex.flexBetween};
    gap: 15px;
    flex-wrap: wrap;

    @media (max-width: 735px) {
        justify-content: space-around;
    }
`;

const Input = styled.input`
    width: 240px;
    padding-inline: 16px;
    height: 50px;
    background: rgba(22, 28, 36, 0.04);
    color: ${colors.gray};
    font-size: 16px;
    line-height: 26px;
    font-family: ${fonts.sfReg};
    border: none;

    &:focus{
        outline: 1px solid ${colors.primaryColor};
    }
    
    &.error{
        outline: 1px solid red;
    }

    @media (max-width: 512px) {
        width: 100%;
    }
`;

const SubmitBtn = styled.button`
    padding-inline: 69px;
    height: 50px;
    background-color: ${colors.primaryColor};
    color: ${colors.light};
    font-size: 16px;
    line-height: 26px;
    font-family: ${fonts.sfM};
    border: 1px solid ${colors.primaryColor};
    transition: 0.3s;
    
    &:active{
        background: transparent;
        color: ${colors.primaryColor};
    }

    @media (max-width: 512px) {
        width: 100%;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export { ContactWrapper, ContactContent, ContactForm, Input, SubmitBtn, InputWrapper };