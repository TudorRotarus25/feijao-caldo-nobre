import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import logoImage from '../../images/logo.png';

import classes from './Hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero-image.jpeg" }) {
        childImageSharp {
          fixed(width: 2000) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }  
  `);

  return (
    <div className={classes.root}>
      <div
        className={classes.content}
        style={{ backgroundImage: `url('${data.file.childImageSharp.fixed.src}')` }}
      >
        <div className={classes.logoContainer}>
          <img
            className={classes.logoImage}
            src={logoImage}
            alt="Feijao Caldo Nobre logo"
          />
        </div>
        <div className={classes.infoContainer}>
          <h1>
            Nós somos a marca Feijão Caldo Nobre
          </h1>
          <h2 className="h4">
            Com grãos cuidadosamente selecionados, trazemos o melhor dos ingredientes para a sua
            mesa.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
