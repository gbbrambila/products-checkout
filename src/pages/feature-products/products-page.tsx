import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import PageTitle from "../../layout/page-title";
import useProductsPageHook from "./products-page.hook";
import { useProductCartActions } from "../feature-cart/cart-page.hook";
import CartPage from "../feature-cart/cart-page";

export default function ProductsPage() {
  const { productList } = useProductsPageHook();

  const { addProductToTheCart } = useProductCartActions();

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <PageTitle title="Products" />

        {productList.map((productItem) => {
          const { id, image, name, description, price } = productItem;
          return (
            <Grid item key={id}>
              <Card variant="outlined" sx={{ maxWidth: 315 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    {price}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button size="small" onClick={() => addProductToTheCart(id)}>
                    Add to the cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <CartPage />
    </>
  );
}
