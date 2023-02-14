import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const Files = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenContainer>
  );
};

export default Files;
