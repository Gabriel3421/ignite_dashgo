import { Box, Flex, Heading, Icon, Button, Table, Thead, Tr, Th, Checkbox,Text, Tbody, Td, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";


export default function UserList(){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuarios</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>asd</Text>
                    <Text fontSize='sm' color='gray.300'>asd</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>asd</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}