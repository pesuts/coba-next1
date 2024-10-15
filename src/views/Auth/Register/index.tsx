import Link from "next/link";
import { useRouter } from "next/router";

// import style from "./Register.module.scss";
import style from "../Auth.module.scss";
import { useState } from "react";
import { signIn } from "next-auth/react";

const RegisterView = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      fullName: event.target.fullName.value,
    };

    const result = await fetch("/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      push("/auth/login");
    } else {
      setError(result.status === 400 ? "Email already exist" : "");
    }
    event.target.reset();
    setIsLoading(false);
  };

  return (
    <div className={style.body}>
      <div className={style.register}>
        <h1 className={style.register__title}>Register</h1>
        {error && <p className={style.register__error__message}>{error}</p>}
        <div className={style.register__form}>
          <form onSubmit={handleSubmit}>
            <div className={style.register__form__item}>
              <label
                htmlFor="fullName"
                className={style.register__form__item__label}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Nama Lengkap"
                required={true}
                className={style.register__form__item__input}
              />
            </div>
            <div className={style.register__form__item}>
              <label
                htmlFor="email"
                className={style.register__form__item__label}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required={true}
                className={style.register__form__item__input}
              />
            </div>
            <div className={style.register__form__item}>
              <label
                htmlFor="password"
                className={style.register__form__item__label}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required={true}
                className={style.register__form__item__input}
              />
            </div>
            <button
              type="submit"
              className={style.register__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            <button
              className={style.register__form__item__google}
              onClick={() => {
                signIn("google", {
                  callbackUrl: "/",
                  redirect: false,
                });
              }}
            >
              Sign in with Google
            </button>
          </form>
        </div>
        <p className={style.register__CTA}>
          Sudah punya akun? Login{" "}
          <Link href={"login"}>
            <span>disini</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
