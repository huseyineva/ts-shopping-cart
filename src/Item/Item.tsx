import Button from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styled";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <div className="itemDiv">
      <img src={item.image} alt={item.title} />
      <div className="titleDescDiv">
        <h3>{item.title}</h3>
        <p>-----------------------------------------------------------</p>
        <p>{item.description}</p>
      </div>
    </div>
    <div className="footer">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        ${item.price}
      </h2>
      <Button variant="contained" onClick={() => handleAddToCart(item)}>
        Add to cart
      </Button>
    </div>
  </Wrapper>
);

export default Item;
