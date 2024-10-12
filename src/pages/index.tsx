// import localFont from "next/font/local";

import Head from "next/head"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        Hello Daniel
      </div>
    </div>
  );
}
