import { uiActions } from "./ui-slice";

export const initializeCartVisibility = (isVisible) => {
  return (dispatch) => {
    dispatch(uiActions.setCartVisibility(isVisible));
  };
};
