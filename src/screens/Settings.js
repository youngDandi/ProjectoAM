import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const Settings = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenContainer>
  );
};

export default Settings;
