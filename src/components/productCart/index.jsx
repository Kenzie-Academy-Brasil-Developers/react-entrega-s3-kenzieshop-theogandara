import { Div, Button, Name } from "./style";

const Product = ({ product, addFunc }) => {
  return (
    <Div>
      <Name>{product.name}</Name>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <Button onClick={addFunc}>Remover</Button>
    </Div>
  );
};
export default Product;
