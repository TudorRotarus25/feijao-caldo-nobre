import React from 'react';
import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';

import classes from './Hero.module.scss';

const Hero = () => {
  const { banner, logo } = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "hero-image.jpeg" }) {
        childImageSharp {
          fixed(width: 2000) {
            ...GatsbyImageSharpFixed
          }
        }
      },
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 250) {
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
        style={{ backgroundImage: `url('${banner.childImageSharp.fixed.src}')` }}
      >
        <div className={classes.logoContainer}>
          <img
            className={classes.logoImage}
            src={logo.childImageSharp.fixed.src}
            alt="Feijao Caldo Nobre logo"
          />
        </div>
        <div className={classes.infoContainer}>
          <h1>
            Nós somos a marca Feijão Caldo Nobre
          </h1>
          <h2 className={clsx(['h4', classes.subtitle])}>
            Com grãos cuidadosamente selecionados, trazemos o melhor dos ingredientes para a sua
            mesa.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
