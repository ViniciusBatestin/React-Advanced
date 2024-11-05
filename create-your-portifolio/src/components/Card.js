import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return(
    <VStack
    borderRadius={"lg"}
    backgroundColor="White"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack>
        <Heading size="sm" color="black" width="100%" justifyContent="flex-Start" pl={4} fontWeight="bold" pb={2}>{title}</Heading>
        <Text color="gray" fontWeight="light" pl={4}>{description}</Text>
      </VStack>
      <HStack color="black" width="100%" justifyContent="flex-start" pl={4}>
        <Text>Lear More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
