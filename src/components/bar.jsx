import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useToken } from '@chakra-ui/react';

export const BarChart = ({ data }) => {
    const colors = useToken("colors", ["blue.200"]);
    const graphData = formatData(data ? data.averageWait : []);
    console.log(graphData)
    return <ResponsiveBar
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        data={graphData}
        indexBy="label"
        colors={colors}
    />
}

function formatData(data) {
    return data.map((d, i) => {
        return {
            label: String(i),
            value: d
        }
    })
}