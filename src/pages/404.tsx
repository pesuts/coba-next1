const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 text-slate-800">
      <img src="/not-found.png" alt="not found" width={450}></img>
      <div className="flex gap-3 text-2xl">
        <p className="font-bold">404</p>
        <p>|</p>
        <p>Page Not Found</p>
      </div>
    </div>
  );
};

export default Custom404;
