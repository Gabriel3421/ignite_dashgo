import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Gabriel</Text>
            <Text color="gray.300" fontSize="small" >
              g@g.com
            </Text>
          </Box>
        )}
        <Avatar size="md" name="Gabriel" />
       </Flex>
  )
}