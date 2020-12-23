import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import classes from './Products.module.scss';

const Products = () => {
  const {
    beansPremium,
    beansPremium2,
    beansCarioca,
    beansFradinho,
    beansPreto,
    beansGood,
    farinhaGrossa,
    farinhaFine,
    corn,
  } = useStaticQuery(
    graphql`
      query {
        beansPremium: file(relativePath: { eq: "products/caldo-nobre-premium.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        beansPremium2: file(relativePath: { eq: "products/caldo-nobre-premium-2.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        beansCarioca: file(relativePath: { eq: "products/caldo-nobre-carioca.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        beansFradinho: file(relativePath: { eq: "products/caldo-nobre-fradinho.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        beansPreto: file(relativePath: { eq: "products/caldo-nobre-preto.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        beansGood: file(relativePath: { eq: "products/good.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        farinhaGrossa: file(relativePath: { eq: "products/farinha-mandioca.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        farinhaFine: file(relativePath: { eq: "products/farinha-fina.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        corn: file(relativePath: { eq: "products/pipoca.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  const productsData = [
    {
      img: beansPremium.childImageSharp.fixed.src,
      name: 'Feijão Branco Caldo Nobre Premium',
    },
    {
      img: beansPremium2.childImageSharp.fixed.src,
      name: 'Feijão Carioca Caldo Nobre Premium',
    },
    {
      img: beansCarioca.childImageSharp.fixed.src,
      name: 'Feijão Carioca Caldo Nobre',
    },
    {
      img: beansFradinho.childImageSharp.fixed.src,
      name: 'Feijão Fradinho Caldo Nobre',
    },
    {
      img: beansPreto.childImageSharp.fixed.src,
      name: 'Feijão Preto Caldo Nobre',
    },
    {
      img: beansGood.childImageSharp.fixed.src,
      name: 'Feijão Carioca Good',
    },
    {
      img: farinhaGrossa.childImageSharp.fixed.src,
      name: 'Farinha de Mandioca Grossa Caldo Nobre',
    },
    {
      img: farinhaFine.childImageSharp.fixed.src,
      name: 'Farinha de Mandioca Fina Caldo Nobre',
    },
    {
      img: corn.childImageSharp.fixed.src,
      name: 'Milho de pipoca',
    },
  ];

  return (
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
};

export default Products;
