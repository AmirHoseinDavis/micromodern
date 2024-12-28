import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href={"/products"}>products</Link>{" "}
    </div>
  );
};

export default Home;
