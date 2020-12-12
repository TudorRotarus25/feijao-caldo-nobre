import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import classes from './OurSpace.module.scss';

const OurSpace = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "our-space.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <div className={classes.ourSpace} id="our-space">
      <div className={classes.imageContainer}>
        <Img fluid={file.childImageSharp.fluid} alt="Feijão Caldo Nobre | Espaco" />
      </div>
      <div className={classes.textContainer}>
        <h2>Nosso Espaço</h2>
        <p>
          As mais modernas máquinas de beneficiar e o empacotamento com uma velocidade precisa,
          fazem
          parte de um amplo galpão, pronto para atender as necessidades de cada cliente.
        </p>
      </div>
    </div>
  );
};

export default OurSpace;
