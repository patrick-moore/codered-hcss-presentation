import React from 'react';
import { Flex } from '@chakra-ui/react';

const cardStyle = {
    overflow: "hidden",
    bg: "white",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
}

export const Card = ({ children, ...props }) => {
    return <Flex sx={cardStyle} {...props}>{children}</Flex>
}