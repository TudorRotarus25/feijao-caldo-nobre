import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.scss';
import logo from '../../images/logo-white.png';

const Footer = () => (
  <div className={classes.footer}>
    <div>
      <img
        className={classes.logo}
        src={logo}
        alt="Feijão Caldo Nobre logo"
      />
    </div>
    <div className={classes.contentContainer}>
      <p className={classes.title}>
        COMÉRCIO DE CEREAIS GOOD LTDA. EPP
      </p>
      <div className={classes.phoneNumbers}>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faPhoneAlt}
          />
          (11) 3227-5882
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faWhatsapp}
          />
          (11) 9 9486-1774
        </div>
      </div>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faEnvelope}
        />
        vendas@feijaocaldonobre.com.br
      </div>
      <div>
        Rua Fernandes Silva, 51 - Brás - CEP 03005-010 - São Paulo/SP
      </div>
    </div>
  </div>
);

export default Footer;
