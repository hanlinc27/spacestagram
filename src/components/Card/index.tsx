import React from "react";
import { CardMedia, Typography, Tooltip } from "@material-ui/core";
import FileCopy from "@material-ui/icons/FileCopy";
import Heart from "react-animated-heart";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  StyledCard,
  StyledCardHeader,
  ImageCardContent,
  ActionsContainer,
  StyledIconButton,
} from "./styles";
interface CardProps {
  title: string;
  imageURL: string;
  description: string;
  dateCreated: string;
  tags?: string[];
}

const ImageCard: React.FC<CardProps> = ({
  title,
  imageURL,
  description,
  dateCreated,
}) => {
  const [liked, setLiked] = React.useState<boolean>(false);
  const [copiedLink, setCopiedLink] = React.useState<string>("");

  const date = new Date(dateCreated).toDateString();

  return (
    <StyledCard>
      <StyledCardHeader title={title} subheader={date} />

      <CardMedia component="img" height="200" image={imageURL} alt={title} />

      <ImageCardContent>
        <Typography
          style={{ fontFamily: "Ubuntu" }}
          align="left"
          color="textSecondary"
          display="block"
        >
          {description}
        </Typography>
        <ActionsContainer>
          <Heart isClick={liked} onClick={() => setLiked(!liked)} />

          <CopyToClipboard
            text={imageURL}
            onCopy={() => setCopiedLink(imageURL)}
          >
            <Tooltip
              title={
                copiedLink === imageURL
                  ? "Copied image link!"
                  : "Copy to clipboard"
              }
            >
              <StyledIconButton aria-label="share">
                <FileCopy />
              </StyledIconButton>
            </Tooltip>
          </CopyToClipboard>
        </ActionsContainer>
      </ImageCardContent>
    </StyledCard>
  );
};

export default ImageCard;
