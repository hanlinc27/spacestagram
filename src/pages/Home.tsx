import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { LinearProgress } from "@material-ui/core";

import { GalaxyObject } from "./types";
import Card from "../components/Card";
import LeftIllustration from "../assets/left-illustration.png";
import { Title, Credits, ImageContainer, PlanetImage } from "./styles";

const NASA_URL = "https://images-api.nasa.gov/search?q=galaxies";

const Home: React.FC = () => {
  const { fetcher } = useSWRConfig();
  const { data, error } = useSWR(NASA_URL, { fetcher });

  console.log(data);
  if (error) return <div>Error fetching images!</div>;
  if (!data) return <LinearProgress />;

  const imageList = data.collection.items
    .filter((data: GalaxyObject) => data.data[0].description_508)
    .map((data: GalaxyObject, key: number) => {
      return (
        <Card
          key={key}
          title={data.data[0].title}
          imageURL={data.links[0].href}
          description={data.data[0].description_508}
          dateCreated={data.data[0].date_created}
        />
      );
    });

  return (
    <React.Fragment>
      <div>
        <PlanetImage src={LeftIllustration} />
        <Title>Spacestagram</Title>
        <Credits>Brought to you by the NASA Image and Video Library!</Credits>
      </div>
      <ImageContainer>{imageList}</ImageContainer>
    </React.Fragment>
  );
};

export default Home;
