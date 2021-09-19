import React from "react";
import { MediaCard } from "@shopify/polaris";

interface CardProps {
  title: string;
  imageURL: string;
  description: string;
  dateCreated: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, imageURL, description }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <>
      <MediaCard
        title={title}
        description={description}
        primaryAction={{
          content: liked ? "Unlike" : "Like",
          onAction: () => {
            setLiked(!liked);
          },
        }}
        size="small"
      >
        <img
          alt=""
          width="40%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={imageURL}
        ></img>
      </MediaCard>
    </>
  );
};

export default Card;
