import { useSelector } from "react-redux";
import {
  selectIfIsProductsFetched,
  selectProductsItems,
} from "../../store/product-slice/products.selectors";

function useProductsPageHook() {
  const productList = useSelector(selectProductsItems);
  const isProductsFetched = useSelector(selectIfIsProductsFetched);

  return { isProductsFetched, productList };
}

export default useProductsPageHook;
