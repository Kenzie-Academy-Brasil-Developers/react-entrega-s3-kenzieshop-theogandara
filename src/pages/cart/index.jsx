import ProductCart from "../../components/productCart";
import { Vitrine, Div, Title, Button } from "./style";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cart/actions";

const Cart = () => {

  const dispatch = useDispatch();

  const carrinho = useSelector((store) => store.cart);

  const total = carrinho.length;

  return (
    <>
      <Vitrine>
        {carrinho.map((product) => {
          return (
            <ProductCart
              product={product}
              addFunc={() => dispatch(removeFromCart(product.id))}
            />
          );
        })}
      </Vitrine>
      <Div>
        <Title>Resumo do pedido</Title>
        <div>{total} Produtos</div>
        <Link to="/">Continuar comprando</Link>
        <Button>Finalizar compra</Button>
      </Div>
    </>
  );
};

export default Cart;
