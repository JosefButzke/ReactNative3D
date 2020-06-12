import React, { useState, useEffect } from 'react';
import { Container, Card, Image, Name, Button, ButtonText } from './styles';
import { ScrollView } from 'react-native';

interface IProduct {
  id: number;
  name: string;
  pathObj: string;
  pathMtl: string;
  image_url: string;
}

const ListProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setProducts([
      { id: 1, name: 'Tênis de Caminhada Leve Confortável', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x' },
      { id: 2, name: 'Tênis Adidas Run Falcon Masculino', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/18/COL-6981-018/COL-6981-018_zoom2.jpg?ts=1584624168&ims=326x' },
      { id: 3, name: 'Tênis de Caminhada Leve Confortável', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom2.jpg?ts=1591848500&ims=326x' },
      { id: 4, name: 'Tênis Adidas Falcon Feminino', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/10/COL-4398-010/COL-4398-010_zoom2.jpg?ts=1587440444&ims=326x' },
      { id: 5, name: 'Sapato casual', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://github.com/JosefButzke/ReactNative3D/blob/master/static/tamanco/tamanco.png' },
      { id: 6, name: 'Sapato casual', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-precision-iv-masculino/20/HZM-3780-120/HZM-3780-120_zoom2.jpg?ts=1585331353&ims=326x' },
      { id: 7, name: 'Sapato casual', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-lebron-witness-iv-masculino/54/HZM-2140-954/HZM-2140-954_zoom2.jpg?ts=1585152306&ims=326x' },
      { id: 8, name: 'Sapato casual', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom2.jpg?ts=1591848499&ims=326x' },
      { id: 9, name: 'Sapato casual', pathObj: require('../../../static/tamanco/shoe.obj'), pathMtl: require('../../../static/tamanco/shoe.mtl'), image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-shox-r4-masculino/50/004-4265-150/004-4265-150_zoom2.jpg?ts=1591029487&ims=326x' },
    ])
  }, [])

  return (
    <Container>
      {products.map(product => (
        <ScrollView>
          <Card>
            <Image source={{ uri: product.image_url }} />
            <Name>{product.name}</Name>
            <Button><ButtonText>Ver detalhes</ButtonText></Button>
          </Card>
        </ScrollView>
      ))}

    </Container>
  )
}

export default ListProducts
