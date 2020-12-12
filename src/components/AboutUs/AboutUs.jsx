import React from 'react';

import classes from './AboutUs.module.scss';
import banner from '../../images/about-us-banner.jpeg';

const AboutUs = () => (
  <div className={classes.aboutUs} id="about">
    <img className={classes.banner} src={banner} alt="about us banner" />
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

export default AboutUs;
