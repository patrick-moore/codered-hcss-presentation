import { Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAggregate, useRestaurants } from "./data";
import { Card } from "./components/card";
import { RestaurantTable } from "./components/table";
import { Map } from "./components/map";
import { BarChart } from "./components/bar-chart";
import { LineChart } from "./components/line-chart";

export const App = () => {
  const { data: restaurants = [] } = useRestaurants();
  const { data: aggregate = {} } = useAggregate();
  const [_selectedRestaurant, setSelectedRestaurant] = useState();
  const selectedRestaurant = _selectedRestaurant || restaurants[0];

  return (
    <Grid sx={gridStyle}>
      <Card gridArea="map">
        <Map data={restaurants} onHover={setSelectedRestaurant} />
      </Card>
      <Card gridArea="table">
        <RestaurantTable
          selectedRestaurant={selectedRestaurant}
          data={restaurants}
          onClick={setSelectedRestaurant}
        />
      </Card>
      <Card gridArea="chart1">
        <LineChart
          selectedRating={selectedRestaurant ? selectedRestaurant.rating : []}
          averageRating={aggregate ? aggregate.rating : []}
        />
      </Card>
      <Card gridArea="chart2">
        <BarChart
          selectedWaitTime={
            selectedRestaurant ? selectedRestaurant.averageWait : []
          }
        />
      </Card>
    </Grid>
  );
};

const gridStyle = {
  height: "100vh",
  width: "100%",
  bg: "gray.100",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "2fr 1fr 1fr",
  gridTemplateAreas: '"map map map" "table table chart1" "table table chart2"',
  gridGap: 3,
  p: 3,
};
