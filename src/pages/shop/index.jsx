import Product from "../../components/product";
import { Vitrine } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";


const Shop = () => {

  const dispatch = useDispatch();

  const vitrine = useSelector((store) => store.products);

  return (
    <Vitrine>
      {vitrine.map((product) => {
        return <Product product={product} addFunc={()=>dispatch(addToCart(product))} />;
      })}
    </Vitrine>
  );
};

export default Shop;
