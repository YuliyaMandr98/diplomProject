import { AlertProps } from "antd";

export const Actions = {
  SWOH_ALERT: "SWOH_ALERT",
  HIDE_ALERT: "HIDE_ALERT",
};

export const showAlert = (alert: Partial<AlertProps>) => ({
  type: Actions.SWOH_ALERT,
  payload: alert,
});

export const hideAlert = () => ({
  type: Actions.HIDE_ALERT,
});
