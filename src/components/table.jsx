import React from "react";
import {
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Thead,
  useToken,
} from "@chakra-ui/react";

export const RestaurantTable = ({ data = [], onClick, selectedRestaurant }) => {
  const [blue50] = useToken("color", ["blue.50"]);
  return (
    <Flex overflow="auto" maxHeight="100%" width="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Genre</Th>
            <Th isNumeric>Current Rating</Th>
            <Th isNumeric>Average Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((restaurant) => (
            <Tr
              key={restaurant.id}
              onClick={() => onClick(restaurant)}
              sx={{
                backgroundColor:
                  selectedRestaurant.id === restaurant.id ? blue50 : undefined,
              }}
            >
              <Td>{restaurant.name}</Td>
              <Td>{restaurant.genre}</Td>
              <Td isNumeric>
                {restaurant.rating[restaurant.rating.length - 1]}
              </Td>
              <Td isNumeric>{restaurant.averagePrice}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
