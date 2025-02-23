import { useDispatch } from "react-redux";
import { useSelectShowAlert } from "../../../store/selectors";
import { Alert as ANTDAlert } from "antd";
import { hideAlert } from "../../../store/actions";
import { useEffect } from "react";

const Alert = () => {
  const { isShowAlert, currentAlert } = useSelectShowAlert();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideAlert());
  };

  useEffect(() => {
    let timeout;

    if (isShowAlert) {
      timeout = setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
    } else {
      clearTimeout(timeout);
    }
  }, [isShowAlert]);

  if (!isShowAlert) return null;

  return (
    <ANTDAlert
      {...currentAlert}
      showIcon
      style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
      onClose={onClose}
      closable
    />
  );
};

export default Alert;
