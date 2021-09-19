import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { LinearProgress } from "@material-ui/core";

import { GalaxyObject } from "./types";
import Card from "../components/Card";

const NASA_URL = "https://images-api.nasa.gov/search?q=galaxy";

const Home: React.FC = () => {
  const { fetcher } = useSWRConfig();
  const { data, error } = useSWR(NASA_URL, { fetcher });

  if (error) return <div>Error fetching images!</div>;
  if (!data) return <LinearProgress />;

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
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Spacestagram</h1>
      <h5 style={{ textAlign: "center" }}>
        Brought to you by the NASA Image and Video Library!
      </h5>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageList}
      </div>
      </React.Fragment>
  );
};

export default Home;
