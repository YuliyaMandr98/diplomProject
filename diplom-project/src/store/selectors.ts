import { useSelector } from "react-redux";
import { State } from "./reducer";

// const selectorIsShowModalPost = (state: State) => state.isShowModalPost;
// const selectorShownPost = (state: State) => state.shownPost;

// export const useSelectIsShowModalPost = () =>
//   useSelector(selectorIsShowModalPost);
// export const useSelectShownPost = () => useSelector(selectorShownPost);

const selectShowAlert = (state: State) => ({
  isShowAlert: state.isShowAlert,
  currentAlert: state.currentAlert,
});

export const useSelectShowAlert = () => useSelector(selectShowAlert);
