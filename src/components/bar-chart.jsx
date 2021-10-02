import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useToken } from "@chakra-ui/react";

export const BarChart = ({ selectedWaitTime = [] }) => {
  const colors = useToken("colors", ["blue.200"]);

  const data = formatData(selectedWaitTime);

  return (
    <ResponsiveBar
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      data={data}
      indexBy="label"
      colors={colors}
    />
  );
};

function formatData(data) {
  return data.map((d, i) => {
    return {
      label: String(i),
      value: d,
    };
  });
}
