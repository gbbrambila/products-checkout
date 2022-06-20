import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IProductItem } from "../../types/product-cart.type";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsError,
} from "./products.slice";

export const fetchProductsEpic = (action$: Observable<{ type: string }>) =>
  action$.pipe(
    ofType(fetchProducts.type),
    tap(() => console.log("fetchProductsEpic: Fetching products")),
    map(() => {
      // TODO: Load products from api
      const products: IProductItem[] = [
        {
          id: 1,
          name: "Classic Ad",
          description: "Offers the most basic level of advertisement",
          image: "https://via.placeholder.com/300x200",
          price: 269.99,
        },
        {
          id: 2,
          name: "Stand out Ad",
          description:
            "Allows advertisers to use a company logo and use a longer presentation text",
          image: "https://via.placeholder.com/300x200",
          price: 322.99,
        },
        {
          id: 3,
          name: "Premium Ad",
          description:
            "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
          image: "https://via.placeholder.com/300x200",
          price: 394.99,
        },
      ];

      return fetchProductsSuccess(products);
    }),
    catchError((error) => of(fetchProductsError(error)))
  );
