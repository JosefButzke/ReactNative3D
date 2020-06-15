import styled from 'styled-components/native';

export const Container = styled.ScrollView`flex: 1; background: white;`;

export const Header = styled.View`height: 70px; flex-direction: row; justify-content: space-between; padding: 0 20px; align-items: center;`;

export const SearchContainer = styled.View``;

export const SearchInput = styled.TextInput`
  height: 44px;
  margin: 0 30px;
  border-radius: 10px;

  shadow-opacity: 0.75;
  shadow-radius: 5;
  shadow-color: red;
  shadow-offset: { height: 0, width: 0 };
  elevation: 5
`;


export const SearchInputIcon = styled.View`position: absolute; top: 25px; right: 30px;`;

export const CardSmall = styled.View`margin: 10px 20px; background: white; padding: 10px;`;

export const CardBig = styled.TouchableOpacity`margin: 10px 20px; background: white; padding: 10px;`;

export const ImageSmall = styled.Image` width: 80px; height: 80px; resize-mode: contain;`;

export const ImageBig = styled.Image` width: 80px; height: 80px; resize-mode: contain;`;

export const Name = styled.Text`font-size: 20px; color: #aaa; `;

export const Price = styled.Text`font-size: 20px; color: #aaa; `;

export const Button = styled.TouchableOpacity`font-size: 20px; color: #aaa; `;

export const ButtonText = styled.Text`font-size: 20px; color: #aaa; `;

export const SubTitle = styled.Text`font-size: 20px; color: #aaa; `;

export const DateText = styled.Text`font-size: 20px; color: #aaa; `;
