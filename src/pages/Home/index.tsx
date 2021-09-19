import React from "react";
import useSWR from "swr";

import { GalaxyObject } from "./types";

const NASA_URL = "https://images-api.nasa.gov/search?q=galaxy";
const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
) => {
  const result = await fetch(input, init);
  return result.json();
};

const Home: React.FC = () => {
  const { data, error } = useSWR(NASA_URL, fetcher);

  if (error) return <div>Error fetching images!</div>;
  if (!data) return <div>Loading...</div>;

  console.dir(data)
  const imageList = data.collection.items.map((data: GalaxyObject, key: number) => {
    return <img src={data.links[0].href} key={key} />;
  });

  return (
    <>
      <li>
        {imageList}
      </li>
    </>
  );
};

export default Home;
