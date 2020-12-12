import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import classes from './AboutUs.module.scss';

const AboutUs = () => {
  const { desktopImage, mobileImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "about-us.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileImage: file(relativePath: { eq: "about-us-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: '(min-width: 992px)',
    },
  ];

  return (
    <div className={classes.aboutUs} id="about">
      <Img
        fluid={sources}
        alt="about us banner"
      />
      <div className={classes.content}>
        <h2>Sobre Nós</h2>
        <p className={classes.text}>
          Após uma longa jornada em uma rede varejista de supermercados, a história da Caldo Nobre
          inicia com sucesso por conta da sua experiência e excelência no mercado. Assim em pouco
          tempo é eleita líder em vendas na região de São Paulo, com um nome forte em ações de
          tabloides se tornando a primeira marca nos atacados paulistanos.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
