import { Flex, Box, Text, Avatar } from "@chakra-ui/core";

export function Profile() {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Gabriel</Text>
          <Text color="gray.300" fontSize="small" >
            g@g.com
          </Text>
        </Box>
        <Avatar size="md" name="Gabriel" />
       </Flex>
  )
}