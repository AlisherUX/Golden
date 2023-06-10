import React from "react";
import * as Style from "./style";
import { Title } from "../WhyOur/style";
import { MiniTxt } from "../Product/style";
import { Formik } from "formik";

const Contact = () => {
  return (
    <Style.ContactWrapper>
      <Style.ContactContent>
        <Title>Мы Вам перезвоним</Title>
        <MiniTxt
          style={{
            textAlign: "center",
            maxWidth: "518px",
            width: "100%",
          }}
        >
          Если у вас возникли какие-то вопросы или проблемы, заполните форму и
          мы Вам перезвоним.
        </MiniTxt>
        <Formik>
          {(formik) => {
            return (
              <Style.ContactForm>
                <Style.Input type="text" placeholder="Ваше имя" />
                <Style.Input type="email" placeholder="Ваш Email" />
                <Style.SubmitBtn>Отправить</Style.SubmitBtn>
              </Style.ContactForm>
            );
          }}
        </Formik>
      </Style.ContactContent>
    </Style.ContactWrapper>
  );
};

export default Contact;
