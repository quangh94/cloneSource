import { ProductList } from "../Products/ProductList";
import { HighValueHeader } from "./HighValueHeader";

export const HighValueItems = () => {
  return (
    <div className="sub-content">
      <HighValueHeader />
      <ProductList />
    </div>
  );
};
