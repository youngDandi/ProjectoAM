import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const Search = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenContainer>
  );
};

export default Search;
