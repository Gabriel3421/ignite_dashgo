import { Flex, Text } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationNav";
import { Search } from "./Search";

export default function Header(){
  return (
   <Flex
    as="header"
    w="100%"
    maxW={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
   >
     <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
     >
       dashgo
       <Text as="span" ml="1" color="pink.500" >.</Text>
     </Text>
     <Search />

     <Flex
      align="center"
      ml="auto"
     >
       <NotificationNav />

       <Profile />

     </Flex>
   </Flex>
  )
}