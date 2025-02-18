import { AlertProps } from "antd";
import { Actions } from "./actions";

export interface State {
  isShowAlert: boolean;
  currentAlert: AlertProps | null;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  isShowAlert: false,
  currentAlert: null,
};

function Reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.SWOH_ALERT:
      return { ...state, isShowAlert: true, currentAlert: action.payload };
    case Actions.HIDE_ALERT: {
      return { ...state, isShowAlert: false, currentAlert: null };
    }
    // case Actions.INCREMENT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // case Actions.DECREMENT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    // case Actions.RESET:
    //   return { ...state, count: initialState.count };
    // case Actions.SET_COUNTER:
    //   return { ...state, count: action.payload };
    // case Actions.SHOW_MODAL_POST: {
    //   return { ...state, isShowModalPost: true };
    // }
    // case Actions.HIDE_MODAL_POST: {
    //   return { ...state, isShowModalPost: false };
    // }
    // case Actions.SET_SHOWN_POST: {
    //   return { ...state, shownPost: action.payload };
    // }
    // case Actions.REMOVE_SHOWN_POST: {
    //   return { ...state, shownPost: null };
    // }
    default:
      return state;
  }
}

export default Reducer;
