import * as React from "react";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function InfoBox({ info }) {
  return (
    <Card sx={{ minWidth: 275, margin: "20px auto", padding: "16px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Weather Information
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {info.humidity >= 80 ? (
              <ThunderstormIcon fontSize="large" />
            ) : info.temp <= 15 ? (
              <AcUnitIcon fontSize="large" />
            ) : (
              <WbSunnyIcon fontSize="large" />
            )}
            <span>Current Weather in {info.city}</span>
          </Box>
        </Typography>
        <Typography variant="body2">
          <strong>Temperature:</strong> {info.temp}&deg;C
        </Typography>
        <Typography variant="body2">
          <strong>Min Temperature:</strong> {info.tempMin}&deg;C
        </Typography>
        <Typography variant="body2">
          <strong>Max Temperature:</strong> {info.tempMax}&deg;C
        </Typography>
        <Typography variant="body2">
          <strong>Humidity:</strong> {info.humidity}%
        </Typography>
        <Typography variant="body2">
          <strong>Feels Like:</strong> {info.feelsLike}&deg;C
        </Typography>
        <Typography variant="body2">
          <strong>Weather:</strong> {info.weather}
        </Typography>
      </CardContent>
    </Card>
  );
}
