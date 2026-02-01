import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const {deleteProduct} = useProductStore()
  const toast = useToast()
  const handleProductDelete = async (pid) =>{
    const {success, message} = await deleteProduct(pid)
    if (!success) {
        toast({
            title : "Error",
            description : message,
            status : "error",
            duration : 3000,
            isClosable : true,
        })
    } else {
        toast({
            title : "Success",
            description : message,
            status : "success",
            isClosable : true
        })
    }
  }

  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
      
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />

      <Box>
        <Heading as={"h3"} size={"md"} mb={2} padding={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} padding={2}>
          £{product.price}
        </Text>

        <HStack spacing={2} padding={2}>
          <IconButton icon={<FaEdit />} colorScheme="blue" />
          <IconButton icon={<MdDelete />} onClick={() => handleProductDelete(product._id)} colorScheme="red" />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
