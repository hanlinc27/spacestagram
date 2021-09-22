import styled from "styled-components";
import { Card, CardContent, IconButton, CardHeader } from "@material-ui/core";

export const StyledCard = styled(Card)`
  max-width: 400px;
  margin-top: 15px;
  font-family: "Ubuntu", sans-serif;
`;

export const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-title {
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
  }

  .MuiCardHeader-subheader {
    font-family: "Ubuntu", sans-serif;
  }
`;

export const ImageCardContent = styled(CardContent)`
  margin-bottom: 0px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  margin-left: -30px;
`;

export const StyledIconButton = styled(IconButton)`
  margin-left: -20px;
`;
