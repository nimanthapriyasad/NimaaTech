import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
// import imagePic from "../../assets/Service1.png";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 250,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ServiceCardButton({ imagePic, imageTitle }) {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      <ImageButton
        focusRipple
        key="Breakfast"
        style={{
          width: "100%",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${imagePic})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 25,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {imageTitle}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}
