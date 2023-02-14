import { ScreenContainer, SearchInput } from "../elements/";
import { BlocksMenu } from "../components/";

const Wishlist = () => {
  return (
    <ScreenContainer>
      <SearchInput />
      <BlocksMenu title="Categorias" />
    </ScreenContainer>
  );
};

export default Wishlist;
