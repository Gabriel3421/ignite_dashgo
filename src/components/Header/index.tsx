import { Flex, Text, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationNav } from "./NotificationNav";
import { Search } from "./Search";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export default function Header(){
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
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
     {
       !isWideVersion && (
         <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
         >

         </IconButton>
       )
     }
     <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
     >
       dashgo
       <Text as="span" ml="1" color="pink.500" >.</Text>
     </Text>
     {isWideVersion && <Search />}

     <Flex
      align="center"
      ml="auto"
     >
       <NotificationNav />

       <Profile showProfileData={isWideVersion} />

     </Flex>
   </Flex>
  )
}