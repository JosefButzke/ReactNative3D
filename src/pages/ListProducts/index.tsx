import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  SearchInputIcon,
  SubTitle,
  CardSmall,
  CardBig,
  ImageSmall,
  ImageBig,
  Button,
  ButtonText,
  Name,
  Price,
  DateText
} from './styles';
import { ScrollView } from 'react-native';

interface IProduct {
  id: number;
  name: string;
  image_url: string | any;
}

const ListProducts = ({ navigation }) => {
  const [productsUpArrivals, setProductsUpArrivals] = useState<IProduct[]>([])
  const [productsUpComing, setProductsUpComing] = useState<IProduct[]>([])

  useEffect(() => {
    setProductsUpArrivals([{
      id: 1, name: 'Tênis de Caminhada Leve Confortável', image_url: require('../../../assets/tenis1.png')
    }]);

    setProductsUpComing([
      { id: 1, name: 'Tênis de Caminhada Leve Confortável', image_url: 'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x' },
      { id: 2, name: 'Tênis Adidas Run Falcon Masculino', image_url: 'https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/18/COL-6981-018/COL-6981-018_zoom2.jpg?ts=1584624168&ims=326x' },
      { id: 3, name: 'Tênis de Caminhada Leve Confortável', image_url: 'https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_zoom2.jpg?ts=1591848500&ims=326x' },
      { id: 4, name: 'Tênis Adidas Falcon Feminino', image_url: 'https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/10/COL-4398-010/COL-4398-010_zoom2.jpg?ts=1587440444&ims=326x' },
      { id: 5, name: 'Tamanco Feminino Salto Fino Paula Brazil Lígia Napa Metalizado - Roxo', image_url: 'https://static.netshoes.com.br/produtos/tamanco-feminino-salto-fino-paula-brazil-ligia-napa-metalizado/98/HMX-0568-198/HMX-0568-198_zoom1.jpg?ims=544x' },
      { id: 6, name: 'Sapato casual', image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-precision-iv-masculino/20/HZM-3780-120/HZM-3780-120_zoom2.jpg?ts=1585331353&ims=326x' },
      { id: 7, name: 'Sapato casual', image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-lebron-witness-iv-masculino/54/HZM-2140-954/HZM-2140-954_zoom2.jpg?ts=1585152306&ims=326x' },
      { id: 8, name: 'Sapato casual', image_url: 'https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom2.jpg?ts=1591848499&ims=326x' },
      { id: 9, name: 'Sapato casual', image_url: 'https://static.netshoes.com.br/produtos/tenis-nike-shox-r4-masculino/50/004-4265-150/004-4265-150_zoom2.jpg?ts=1591029487&ims=326x' },
    ]);

  }, [])

  return (
    <Container>
      <Header>
        <ButtonText>icon</ButtonText>
        <ButtonText>icon</ButtonText>
        <ButtonText>icon</ButtonText>
      </Header>
      <SearchContainer>
        <SearchInput />
        <SearchInputIcon>
          <ButtonText>icon</ButtonText>
        </SearchInputIcon>
      </SearchContainer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsUpArrivals.map(product => (
          <CardBig key={product.id}>
            <ImageBig source={product.image_url} />
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <Button><ButtonText>Add to cart</ButtonText></Button>
          </CardBig>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {productsUpComing.map(product => (
          <CardSmall key={product.id}>
            <ImageSmall source={{ uri: product.image_url }} />
            <DateText>{product.name}</DateText>
          </CardSmall>
        ))}
      </ScrollView>

    </Container>
  )
}

export default ListProducts
