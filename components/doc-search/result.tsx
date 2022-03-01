import React, { useEffect, useRef } from "react";
import {
  useColorModeValue,
  Stack,
  Box,
  Flex,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { BsArrowReturnLeft } from "react-icons/bs";
import NextLink from "next/link";

const Result = (props) => {
  const hoverColor = "gray.100";
  const inactiveResultsTextColor = useColorModeValue("gray.900", "gray.100");
  const inactiveResultsIconColor = useColorModeValue("gray.900", "gray.400");
  const inactiveBg = useColorModeValue("gray.50", "choc.secondary");
  const resultsTextColor = props.active ? hoverColor : inactiveResultsTextColor;
  const resultsIconColor = props.active ? hoverColor : inactiveResultsIconColor;

  const ref = useRef(null);

  useEffect(() => {
    if (props.active) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [props.active]);

  const ACTIVE_BACKGROUND = "brand.500";

  return (
    <NextLink href={props.url} passHref>
      <Flex
        ref={ref}
        bg={props.active ? ACTIVE_BACKGROUND : inactiveBg}
        _hover={{
          bg: ACTIVE_BACKGROUND,
        }}
        role="group"
        px={4}
        py={3}
        mr={2}
        rounded="lg"
        cursor="pointer"
        transition="all 0.3s ease-in-out"
        onClick={props.onClick}
      >
        <Icon
          boxSize={5}
          my="auto"
          color={resultsIconColor}
          _groupHover={{ color: hoverColor }}
        >
          <path
            d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4"
            stroke="currentColor"
            fill="none"
            fillRule="evenodd"
            strokeLinejoin="round"
          ></path>
        </Icon>
        <Stack dir="row" spacing={0} ml={5}>
          <Box
            textTransform="capitalize"
            color={resultsTextColor}
            fontSize="sm"
            _groupHover={{ color: hoverColor }}
          >
            {props.section}
          </Box>
          <Box
            fontWeight="bold"
            textTransform="capitalize"
            color={resultsTextColor}
            _groupHover={{ color: hoverColor }}
          >
            {props.component}
          </Box>
        </Stack>
        <Spacer />
        <Icon
          my="auto"
          color={resultsIconColor}
          _groupHover={{ color: hoverColor }}
          boxSize={5}
          as={BsArrowReturnLeft}
        />
      </Flex>
    </NextLink>
  );
};

export default Result;
