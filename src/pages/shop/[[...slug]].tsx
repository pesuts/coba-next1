import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>SHOP PAGE</h1>
      <div>
        Shop :{" "}
        {query.slug && query.slug[0] + "-" + (query.slug[1] ?? "")}
      </div>
    </div>
  );
};

export default ShopPage;
