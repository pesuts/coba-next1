import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";
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
      {/* <div className="big" id="title">Navbar</div> */}
      <div className="big" id="title">Testing</div>
      <Script id="script-title" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'Navbar'`}
      </Script>
      {user ? (
        <div className={styles.logout}>
          {user?.image && (
            <Image
              src={user?.image}
              alt={user?.fullName}
              className={styles.picture}
              width={35}
              height={35}
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
