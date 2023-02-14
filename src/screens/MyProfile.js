import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const MyProfile = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenContainer>
  );
};

export default MyProfile;
