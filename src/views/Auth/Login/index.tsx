import Link from "next/link";
import { useRouter } from "next/router";

import style from "./Login.module.scss";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginView = () => {
  const { push, query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const callbackUrl: any = query.callbackUrl || "/profile";
  console.log("callbackUrl", callbackUrl)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });

      setIsLoading(false);
      if (res?.error) {
        event.target.reset();
        setError("Email or password incoerrect");
      } else { 
        push(callbackUrl);
        // push("/profile");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      event.target.reset();
      setError("Email or password incorrect");
    }
    return;
  };

  return (
    <div className={style.login}>
      <h1 className={style.login__title}>Login Page</h1>
      {error && <p className={style.login__error__message}>{error}</p>}
      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
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
            <label
              htmlFor="password"
              className={style.login__form__item__label}
            >
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
          <button type="submit">Login</button>
        </form>
      </div>
      <p>
        Belum punya akun? Register{" "}
        <Link href={"register"}>
          <span>disini</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
