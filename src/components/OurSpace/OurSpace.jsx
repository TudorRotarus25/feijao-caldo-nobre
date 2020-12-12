import React from 'react';

import spaceImage from '../../images/our-space.jpg';

import classes from './OurSpace.module.scss';

const OurSpace = () => (
  <div className={classes.ourSpace} id="our-space">
    <div className={classes.imageContainer}>
      <img className={classes.image} src={spaceImage} alt="Feijão Caldo Nobre | Espaco" />
    </div>
    <div className={classes.textContainer}>
      <h2>Nosso Espaço</h2>
      <p>
        As mais modernas máquinas de beneficiar e o empacotamento com uma velocidade precisa, fazem
        parte de um amplo galpão, pronto para atender as necessidades de cada cliente.
      </p>
    </div>
  </div>
);

export default OurSpace;
