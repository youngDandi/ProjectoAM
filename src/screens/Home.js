import { ScreenContainer, SearchInput } from "../elements/";
import { Text, TouchableOpacity } from 'react-native'
import { BlocksMenu } from "../components/";

const Home = ({navigation: navigate}) => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
      <TouchableOpacity onPress={ () => navigate('MyBooks')}>
        <Text>Ir para Profile</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default Home;
