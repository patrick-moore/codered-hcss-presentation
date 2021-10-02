import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { useToken } from "@chakra-ui/react"

export const LineChart = ({ selectedRestaurant, averageRating }) => {
    const colors = useToken("colors", ["blue.100", "blue.200"]);
    const rating = selectedRestaurant && selectedRestaurant.rating ? selectedRestaurant.rating : [];
    const data = [...mapData("average", averageRating), ...mapData("selected", rating)]

    return <ResponsiveLine
        curve="monotoneX"
        data={data}
        xScale={{
            type: 'linear',
            min: 0,
            max: 'auto',
        }}
        yScale={{
            type: 'linear',
            min: 0,
            max: 5,
        }}
        colors={colors}
        axisBottom={null}
        enableGridX={false}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    />
}

function mapData(id, rating = []) {
    const data = {
        id,
        data: rating.map((v, i) => ({ x: i, y: v }))
    }
    return [data];
}