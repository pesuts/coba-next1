import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
// import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
  const { data } = useSession();
  const user = data?.user as {
    email: string;
    fullName: string;
    role: string;
    image: string;
  };

  return (
    <div className={styles.navbar}>
      <div className="big">Navbar</div>
      {user ? (
        <div className={styles.logout}>
          {user?.image && (
            <img
              src={user?.image}
              alt={user?.fullName}
              className={styles.picture}
              width={35}
            />
          )}
          <p>{user.fullName}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
};

export default Navbar;
