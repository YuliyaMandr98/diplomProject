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
    default:
      return state;
  }
}

export default Reducer;
