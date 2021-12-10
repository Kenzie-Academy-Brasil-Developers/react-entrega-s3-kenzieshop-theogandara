import { Barra, Button, Span, Logo } from "./style";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/all";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Barra>
      <Logo>
        Theozera <Span>Shop</Span>
      </Logo>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        <AiOutlineHome size={25} />
      </Button>
      <Button
        onClick={() => {
          history.push("/cart");
        }}
      >
        <AiOutlineShoppingCart size={25} />
      </Button>
      <Button>Entrar</Button>
    </Barra>
  );
};
export default Header;
