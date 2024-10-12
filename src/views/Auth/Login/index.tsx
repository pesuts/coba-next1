import Link from "next/link";
import { useRouter } from "next/router";

import style from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  const styles = {
    color: "red",
    border: "1px solid red",
    borderRadius: "15px",
    padding: "10px",
  };

  return (
    <div className={style.login}>
      <h1 className="text-4xl font-bold">Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p style={styles}>
        Belum punya akun? Register <Link href={"register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
