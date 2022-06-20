import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Badge,
} from "@mui/material";

import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTotalCartItems } from "../pages/feature-cart/cart-page.hook";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const totalCartItems = useTotalCartItems();

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ad-products
            </Typography>
            <Button component={Link} to="/products" color="inherit">
              Products
            </Button>
            <IconButton
              size="large"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={totalCartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg" style={{ paddingTop: "50px" }}>
        {children}
      </Container>
    </>
  );
}
