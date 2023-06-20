import React from "react";
import * as Style from "./style";
import { Title } from "components/WhyOur/style";
import { MiniTxt } from "components/ProductSwiper/style";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Container } from "@mui/material";

const Contact = () => {
  const contactinitialValues = {
    name: "",
    email: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const ContactFormValidation = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(20, "Too Long!").required(),
    email: Yup.string().email("Invalid email").required(),
  });

  return (
    <Style.ContactWrapper>
      <Container>
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
          <Formik
            initialValues={contactinitialValues}
            onSubmit={onSubmit}
            validationSchema={ContactFormValidation}
            validateOnChange
          >
            {(formik) => {
              return (
                <Style.ContactForm onSubmit={formik.handleSubmit}>
                  <Style.InputWrapper>
                    <Style.Input
                      className={`${formik.errors.name && "error"}`}
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      onChange={formik.handleChange}
                    />
                    <ErrorMessage
                      render={(el) => {
                        return <div className="error_message">{el}</div>;
                      }}
                      name="name"
                    />
                  </Style.InputWrapper>

                  <Style.InputWrapper>
                    <Style.Input
                      className={`${formik.errors.name && "error"}`}
                      type="email"
                      name="email"
                      placeholder="Ваш Email"
                      onChange={formik.handleChange}
                    />
                    <ErrorMessage
                      render={(el) => {
                        return <div className="error_message">{el}</div>;
                      }}
                      name="email"
                    />
                  </Style.InputWrapper>
                  <Style.SubmitBtn>Отправить</Style.SubmitBtn>
                </Style.ContactForm>
              );
            }}
          </Formik>
        </Style.ContactContent>
      </Container>
    </Style.ContactWrapper>
  );
};

export default Contact;
