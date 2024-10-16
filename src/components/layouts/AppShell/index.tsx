import { useRouter } from "next/router";
// import Navbar from "../Navbar";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"))

type AppShellProps = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {/* <Navbar /> */}
      {children}
      {/* <div>Footer</div> */}
    </main>
  );
};

export default AppShell;
