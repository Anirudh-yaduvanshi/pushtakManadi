import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BookCard( { image, title, description, author, tag }) {
  return (
    <Card
      sx={{
        maxWidth: 305,
        backgroundColor: "#2D2D2D",
        color: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="120"
        image={
          image ||
          "https://th.bing.com/th/id/OIP.KVsdjWg5w0vR6VnGKT2h3gHaHa?rs=1&pid=ImgDetMain"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ color: "#CCCCCC", mb: 1.5 }}>{author}</Typography>
        <Typography variant="body2" sx={{ color: "#CCCCCC" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
            <Button
          size="small"
          onClick={() => {
            window.location.href = `#${tag}`;
          }}
          sx={{
            backgroundColor: "#6B46C1",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#543AA3",
            },
          }}
        >
          {tag}
        </Button>
      </CardActions>
    </Card>
  );
}
