import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router";
const MainHeader = (props) => {
  const navigate = useNavigate();
  const adminHandler = () => {
    navigate("/Admin");
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
            <button style={{ marginLeft: "20px" }} onClick={adminHandler}>
              Admin
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
