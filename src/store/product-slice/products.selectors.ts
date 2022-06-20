import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectProductsState = (state: RootState) => state.products;

export const selectIfIsProductsFetched = createSelector(
  [selectProductsState],
  ({ fetching, initialized }) => {
    return !fetching && initialized;
  }
);

export const selectProductsItems = createSelector(
  [selectProductsState],
  ({ items }) => {
    return items;
  }
);
