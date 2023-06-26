import { Box, Image, Text, Flex, Button, HStack, Avatar, Divider, Card, Tag, AvatarGroup, Center } from '@chakra-ui/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaGgCircle } from 'react-icons/fa';
import { BiSolidCommentDots } from 'react-icons/bi';
export default function ServicePageCard() {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card maxW="sm" borderWidth="1px" borderRadius="20px" overflow="hidden" borderColor="#f3f3f4" >
        <Box p="6">
          <Tag fontSize="1rem" fontWeight="bold" color="#8076f0" backgroundColor="#efeeff" borderRadius="15px" height="30px">
            User Interface
          </Tag>
          <Text fontSize="1.75rem" fontWeight="bold" mt="15px">
            Service Page Website
          </Text>
          <Text fontSize="1rem" color="#a3a4aa" mt="15px" mr="5px">
            Make a page display about services for <br /> websites company with blue and red colors
          </Text>
          <Flex alignItems="center" mt="15px">
            <HStack spacing="2" alignItems="center">
              <Box>
                <AiOutlineCheckCircle />
              </Box>
              <Text fontSize="1rem" mb="10px">
                0/20
              </Text>
            </HStack>
            <HStack ml="auto">
            <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
</AvatarGroup>            </HStack>
            <Button backgroundColor="#4d9cff" color="white"  borderRadius="20px">Invite</Button>
          </Flex>
          <Flex alignItems="center" mb="10px" mt="20px" borderColor="#dbdcde" borderWidth="1px" borderRadius="20px">
    <Box flex="1" p="10px" fontWeight="bold" textAlign="center" color="#646672" justifyContent="space-evenly" alignItems="center" display="flex">
      <FaGgCircle /> 4 Attachment
    </Box>
    <Center height='30px'>
      <Divider orientation='vertical' borderColor="#dbdcde" borderWidth="1px" />
    </Center>
    <Box flex="1" p="10px" fontWeight="bold" textAlign="center" color="#646672" justifyContent="space-evenly" alignItems="center" display="flex">
      <BiSolidCommentDots /> 10 Comment
    </Box>
  </Flex>
</Box>
      </Card>
    </Flex>

  );
}

