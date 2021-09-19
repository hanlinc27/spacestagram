import React from "react";
import useSWR, { useSWRConfig } from "swr";

import { GalaxyObject } from "./types";
import Card from "../components/Card";

const NASA_URL = "https://images-api.nasa.gov/search?q=galaxy";

const Home: React.FC = () => {
  const { fetcher } = useSWRConfig();
  const { data, error } = useSWR(NASA_URL, { fetcher });

  if (error) return <div>Error fetching images!</div>;
  if (!data) return <div>Loading...</div>;

  const imageList = data.collection.items.map(
    (data: GalaxyObject, key: number) => {
      return (
        <Card
          key={key}
          title={data.data[0].title}
          imageURL={data.links[0].href}
          description={data.data[0].description}
          dateCreated={data.data[0].date_created}
        />
      );
    }
  );

  return (
    <>
      <h1>Spacestagram</h1>
      <em>Brought to you by NASA Image and Video Library</em>
      {imageList}
    </>
  );
};

export default Home;
