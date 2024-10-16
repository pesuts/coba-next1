import Image from "next/image";

const Custom404 = ({ message }: { message?: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 text-slate-800">
      <Image src="/not-found.png" alt="not found" height={450} width={350}/>
      {/* <img src="/not-found.png" alt="not found" width={350}/> */}
      <div className="flex gap-3 text-2xl">
        <p className="font-bold">404</p>
        <p>|</p>
        <p>{ message ?? "Page Not Found"}</p>
      </div>
    </div>
  );
};

export default Custom404;
