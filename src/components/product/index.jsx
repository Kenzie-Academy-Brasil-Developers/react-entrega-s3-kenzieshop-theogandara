import { Div, Button } from "./style";

const Product = ({ product, addFunc }) => {
  return (
    <Div>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
      <Button onClick={addFunc}>Adivionar ao carrinho</Button>
    </Div>
  );
};
export default Product;
