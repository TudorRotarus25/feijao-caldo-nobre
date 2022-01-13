import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classes from './Footer.module.scss';

const Footer = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "logo-white.png" }) {
          childImageSharp {
            fixed(height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  return (
    <div className={classes.footer}>
      <div>
        <img
          className={classes.logo}
          src={file.childImageSharp.fixed.src}
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
            (11) 4610-0075 / (11) 99498-9027
          </div>
        </div>
        <div className={classes.iconContainer}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faEnvelope}
          />
          feijao@feijaocaldonobre.com.br
        </div>
        <div>
          Rua Alfa, 392 - 415 Galpao 1 e 2 - UNA, Itaquaquecetuba, SP - CEP 08599670
        </div>
      </div>
    </div>
  );
};

export default Footer;
