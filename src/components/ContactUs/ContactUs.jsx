import React, { useState } from 'react';
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

import { graphql, useStaticQuery } from 'gatsby';
import classes from './ContactUs.module.scss';
import banner from '../../images/contact-us-banner.png';

const API_URL = 'https://feijao-caldo-nobre-7529.twil.io/contact';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            reCaptchaKey
          }
        }
      }
    `,
  );

  const onVerify = (value) => {
    setToken(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      return;
    }

    setIsLoading(true);

    const subject = `Formulário recebido de ${email}`;
    const body = `Nome: ${name}\nTelefone: ${phoneNumber}\nE-mail: ${email}\nMensagem:\n\n\n${message.trim()}`;

    // eslint-disable-next-line no-undef
    const response = await fetch(API_URL, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({ subject, body }).toString(),
    });

    if (response.status === 200) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  };

  const onNameChange = ({ target }) => {
    setName(target.value);
  };

  const onPhoneNumberChange = ({ target }) => {
    setPhoneNumber(target.value);
  };

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const onMessageChange = ({ target }) => {
    setMessage(target.value);
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={site.siteMetadata.reCaptchaKey}
      language="pr-BR"
    >
      <div
        className={classes.contact}
        style={{ backgroundImage: `url('${banner}')` }}
        id="contact"
      >
        <div className={classes.content}>
          <h2>
            Fale Conosco
          </h2>
          {isSuccess && (
            <div className={classes.successMessage}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faCheckCircle}
              />
              Mensagem Enviada
            </div>
          )}
          {isError && (
            <div className={classes.errorMessage}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faExclamationCircle}
              />
              Algo deu errado. Tente novamente
            </div>
          )}
          {(!isSuccess && !isError) && (
            <form onSubmit={onSubmit}>
              <div className={classes.composite}>
                <div className={classes.inputContainer}>
                  <label htmlFor="name">
                    Nome
                  </label>
                  <input id="name" name="name" type="text" value={name} onChange={onNameChange} />
                </div>
                <div className={classes.inputContainer}>
                  <label htmlFor="phone">
                    Telefone
                  </label>
                  <input id="phone" name="phone" type="tel" value={phoneNumber} onChange={onPhoneNumberChange} />
                </div>
              </div>
              <div className={classes.inputContainer}>
                <label htmlFor="email">
                  E-mail
                </label>
                <input id="email" name="email" type="email" value={email} onChange={onEmailChange} />
              </div>
              <div className={classes.inputContainer}>
                <label htmlFor="message">
                  Mensagem
                </label>
                <textarea id="message" name="message" type="text" value={message} onChange={onMessageChange} />
              </div>
              {isLoading ? (
                <div className={classes.spinner}>
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faSpinner}
                    spin
                  />
                </div>
              ) : (
                <button className={classes.button} type="submit">
                  Enviar
                </button>
              )}
              <GoogleReCaptcha onVerify={onVerify} />
            </form>
          )}
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ContactUs;
