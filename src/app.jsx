import { Grid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Map } from './components/map';
import { LineChart } from './components/rating-line';
import { BarChart } from './components/bar';
import { useAggregate, useRestaurants } from './data';
import { RestaurantTable } from './components/table';
import { Card } from './components/card';

const gridStyle = {
    gridTemplateRows: "2fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateAreas: `"map map map" "k1 k1 k2" "k1 k1 k3"`,
    height: "100vh",
    width: "100%",
    bg: "gray.100",
    gridGap: 3,
    p: 3
}

export const App = () => {
    const { data: restaurants = [] } = useRestaurants();
    const { data: aggregate = {} } = useAggregate();
    const [_selectedRestaurant, setSelectedRestaurant] = useState();
    const selectedRestaurant = _selectedRestaurant || restaurants[0];

    return <Grid sx={gridStyle}>
        <Card gridArea="map"><Text>Map</Text><Map data={restaurants} onClick={setSelectedRestaurant} /></Card>
        <Card gridArea="k1"><Text>Table</Text><RestaurantTable data={restaurants} selectedRestaurant={selectedRestaurant || restaurants[0]} /></Card>
        <Card gridArea="k2"><Text>Rating</Text><LineChart selectedRestaurant={selectedRestaurant || restaurants[0]} averageRating={aggregate.rating} /></Card>
        <Card gridArea="k3"><Text>Wait time</Text><BarChart data={selectedRestaurant || restaurants[0]} averageWait={aggregate.averageWait} /></Card>
    </Grid>
}

