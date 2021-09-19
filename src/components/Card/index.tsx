import React from "react";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import FileCopy from "@material-ui/icons/FileCopy";
import Heart from "react-animated-heart";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  const [liked, setLiked] = React.useState(false);
  const [copiedLink, setCopiedLink] = React.useState("");

  const date = new Date(dateCreated).toDateString();

  return (
    <Card style={{ maxWidth: 400, marginTop: 15 }}>
      <CardHeader title={title} subheader={date} />

      <CardMedia component="img" height="200" image={imageURL} alt={title} />

      <CardContent style={{ paddingBottom: "0px" }}>
        <Typography align="left" color="textSecondary" display="block">
          {description}
        </Typography>
        <div style={{ display: "flex", marginLeft: "-30px" }}>
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
              <IconButton aria-label="share" style={{ marginLeft: "-20px" }}>
                <FileCopy />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
