import React from 'react';

import beansPremium from '../../images/products/caldo-nobre-premium.png';
import beansPremium2 from '../../images/products/caldo-nobre-premium-2.png';
import beansCarioca from '../../images/products/caldo-nobre-carioca.png';
import beansFradinho from '../../images/products/caldo-nobre-fradinho.png';
import beansPreto from '../../images/products/caldo-nobre-preto.png';
import beansGood from '../../images/products/good.png';
import farinhaGrossa from '../../images/products/farinha-mandioca.png';
import farinhaFine from '../../images/products/farinha-fina.png';
import corn from '../../images/products/pipoca.png';


import classes from './Products.module.scss';

const productsData = [
  {
    img: beansPremium,
    name: 'Feijão Branco Caldo Nobre Premium',
  },
  {
    img: beansPremium2,
    name: 'Feijão Carioca Caldo Nobre Premium',
  },
  {
    img: beansCarioca,
    name: 'Feijão Carioca Caldo Nobre',
  },
  {
    img: beansFradinho,
    name: 'Feijão Fradinho Caldo Nobre',
  },
  {
    img: beansPreto,
    name: 'Feijão Preto Caldo Nobre',
  },
  {
    img: beansGood,
    name: 'Feijão Carioca Good',
  },
  {
    img: farinhaGrossa,
    name: 'Farinha de Mandioca Grossa Caldo Nobre',
  },
  {
    img: farinhaFine,
    name: 'Farinha de Mandioca Fine Caldo Nobre',
  },
  {
    img: corn,
    name: 'Pipoca',
  },
];

const Products = () => (
  <div className={classes.products} id="products">
    <h3>Nossos Produtos</h3>
    <p className={classes.description}>
      Além de uma extensa variedade de tipos de feijão, a Feijão Caldo Nobre também oferece uma
      linha de milho para pipoca e farinha de mandioca.
    </p>
    <div className={classes.productsContainer}>
      {productsData.map(({ img, name }) => (
        <div className={classes.product} key={name}>
          <img className={classes.productImage} src={img} alt="name" />
          <p className={classes.productTitle}>
            {name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
