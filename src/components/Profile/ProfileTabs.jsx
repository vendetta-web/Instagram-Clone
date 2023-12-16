import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { BiSolidBookmarks } from "react-icons/bi";


const ProfileTabs = () => {
	return (
		<Flex
			w={"full"}
			justifyContent={"center"}
			gap={{ base: 4, sm: 10 }}
			textTransform={"uppercase"}
			fontWeight={"bold"}
		>
			<Flex borderTop={"1px solid white"} alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<MdAddAPhoto />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Posts
				</Text>
			</Flex>

			<Flex alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<BiSolidBookmarks />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Saved
				</Text>
			</Flex>

			<Flex alignItems={"center"} p='3' gap={1} cursor={"pointer"}>
				<Box fontSize={20}>
					<FaHandHoldingHeart fontWeight={"bold"} />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }}>
					Likes
				</Text>
			</Flex>
		</Flex>
	);
};

export default ProfileTabs;
