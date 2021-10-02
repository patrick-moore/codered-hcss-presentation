import React from 'react';
import { Table, Tr, Th, Tbody, Td, Flex, Thead, useToken } from '@chakra-ui/react';

export const RestaurantTable = ({ data, selectedRestaurant }) => {
    const [blue50] = useToken("color", ["blue.50"]);
    return <Flex overflow="auto" maxHeight="100%" width="100%">
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
                {
                    data.map(r => {
                        return <Tr bg={selectedRestaurant && selectedRestaurant.id === r.id ? blue50 : undefined} key={r.id}>
                            <Td>{r.name}</Td>
                            <Td>{r.genre}</Td>
                            <Td isNumeric>{r.rating[r.rating.length - 1]}</Td>
                            <Td isNumeric>{r.averagePrice}</Td>
                        </Tr>
                    })
                }
            </Tbody>
        </Table>
    </Flex>
}