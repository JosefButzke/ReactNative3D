import React from 'react';
import { Container } from './styles'
import CanvasCube from '../CanvasCube'

interface IProduct {
  product: {
    id: number;
    name: string;
    pathObj: string;
    pathMtl: string;
    image_url: string;
  }
}

const DetailProduct: React.FC<IProduct> = ({ product }) => {

  return (
    <Container>
      <CanvasCube pathObj={product.pathObj} pathMtl={product.pathMtl} />
    </Container>
  )
}

export default DetailProduct
