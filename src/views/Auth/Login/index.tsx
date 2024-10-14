import Link from "next/link";
import { useRouter } from "next/router";

import style from "./Login.module.scss";

const LoginView = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={style.login}>
    <h1 className={style.login__title}>Login Page</h1>
    <div className={style.login__form}>
      <form action="">
        <div className={style.login__form__item}>
          <label htmlFor="email" className={style.login__form__item__label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            className={style.login__form__item__input}
          />
        </div>
        <div className={style.login__form__item}>
          <label htmlFor="password" className={style.login__form__item__label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required={true}
            className={style.login__form__item__input}
          />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
    <p>
      Belum punya akun? Register <Link href={"register"}><span>disini</span></Link>
    </p>
  </div>
  );
};

export default LoginView;
