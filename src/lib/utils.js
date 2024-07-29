import { useNavigate } from "react-router-dom";

const checkIfLogin = (url, func) => {
  if(localStorage.getItem('auth_token') !== null) {
    func(url)
  }
}

let globalNavigate

const GlobalHistory = () => {
  globalNavigate = useNavigate();

  return null;
};

export {
  checkIfLogin,
  globalNavigate,
  GlobalHistory,
}