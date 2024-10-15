import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
// import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
  const { data } = useSession();

  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      {data ? (
        <div className={styles.logout}>
          <p>{data.user?.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Navbar;
