import styled from "styled-components";
import { flex } from "../../utils/flex";
import { colors, fonts } from "../../utils/variable";

const ContactWrapper = styled.div`
    width: 100%;
    ${flex.center};
    background-color: ${colors.secondaryColor};
    padding-top: 64px;
    padding-bottom: 56px;
    margin-top: 96px;
`;

const ContactContent = styled.div`
    max-width: 748px;
    width: 100%;
    ${flex.justFlex};
    ${flex.center}
    flex-direction: column;
    gap: 24px;
`;

const ContactForm = styled.form`
    width: 100%;
    ${flex.flexBetween};
`;

const Input = styled.input`
    width: 240px;
    height: 50px;
    background: rgba(22, 28, 36, 0.04);
    color: ${colors.gray};
    font-size: 16px;
    line-height: 26px;
    font-family: ${fonts.sfReg};
    padding-block: 12px;
    padding-inline: 16px;
    border: none;

    &:focus{
        outline: 1px solid ${colors.primaryColor};
    }
`;

const SubmitBtn = styled.button`
    padding-inline: 69px;
    padding-block: 11px;
    background-color: ${colors.primaryColor};
    color: ${colors.light};
    font-size: 16px;
    line-height: 26px;
    font-family: ${fonts.sfM};
    border: 1px solid ${colors.primaryColor};
    transition: 0.3s;
    
    &:hover{
        background: transparent;
        color: ${colors.primaryColor};
    }
`;

export { ContactWrapper, ContactContent, ContactForm, Input, SubmitBtn };