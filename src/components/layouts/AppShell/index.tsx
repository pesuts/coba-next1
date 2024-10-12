import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => { 
  const { children } = props; 
  const { pathname } = useRouter();

  // console.log(router);

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {/* <Navbar /> */}
      {children}
      {/* <div>Footer</div> */}
    </main>
  );
}

export default AppShell;