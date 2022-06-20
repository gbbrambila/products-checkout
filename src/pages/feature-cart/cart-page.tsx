import React from "react";

import {
  Grid,
  Card,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import PageTitle from "../../layout/page-title";
import {
  useProductCartActions,
  useProductCartCoupon,
  useProductCartItems,
} from "./cart-page.hook";
import { IProductCartItem } from "../../types/product-cart.type";

export default function CartPage() {
  const { couponValue, setCouponValue } = useProductCartCoupon();

  const { items: cartItems, cartTotal } = useProductCartItems();

  const { removeProductFromCartById, eraseCart, applyCouponDiscount } =
    useProductCartActions();

  if (!cartItems.length) {
    return (
      <Typography variant="body2" align="center" style={{marginTop: '50px'}}>
        Add new products to see the cart
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      <PageTitle title="Cart" />

      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton size="small" onClick={() => eraseCart()}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>

      <Grid item xs={12}>
        <Card variant="outlined">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item: IProductCartItem) => {
                  const {
                    id,
                    name,
                    quantity,
                    price,
                    subtotal,
                    originalPrice,
                    discountApplied,
                  } = item;

                  return (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          size="small"
                          onClick={() => removeProductFromCartById(id)}
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                      <TableCell align="left"> {name} </TableCell>
                      <TableCell align="right">${price.toFixed(2)}</TableCell>
                      <TableCell align="right">{quantity}</TableCell>
                      <TableCell align="right">
                        {discountApplied ? (
                          <Typography
                            variant="body2"
                            style={{
                              textDecoration: "line-through",
                              fontSize: "12px",
                            }}
                          >
                            ${originalPrice.toFixed(2)}
                          </Typography>
                        ) : (
                          ""
                        )}
                        ${subtotal.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>

      <Grid item xs={8}>
        <TextField
          label="Coupon"
          variant="standard"
          onChange={(e) => setCouponValue(e.target.value)}
        />
        <Button
          style={{ marginLeft: "10px", marginTop: "10px" }}
          variant="contained"
          onClick={() => applyCouponDiscount(couponValue || false)}
        >
          Apply
        </Button>

        <div>- secondbite, axil, myer</div>
      </Grid>

      <Grid item xs={4}>
        <Typography align="right" variant="h6">
          Total: ${cartTotal.toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
}
