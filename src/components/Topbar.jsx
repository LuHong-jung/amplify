/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Icon, View } from "@aws-amplify/ui-react";
export default function Topbar(props) {
  const { topbar, overrides, ...rest } = props;
  const buttonTwoTwoZeroOneOneFourNineOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/",
  });
  const buttonTwoTwoZeroOneOneFiveThreeOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/create",
  });
  return (
    <View
      width="1024px"
      height="108px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Topbar")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Button
        display="flex"
        position="absolute"
        top="25.93%"
        bottom="25.93%"
        left="14.75%"
        right="69.92%"
        justifyContent="center"
        alignItems="center"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Profile List"
        onClick={() => {
          buttonTwoTwoZeroOneOneFourNineOnClick();
        }}
        {...getOverrideProps(overrides, "Button2201149")}
      ></Button>
      <Button
        display="flex"
        position="absolute"
        top="25.93%"
        bottom="25.93%"
        left="33.01%"
        right="48.14%"
        justifyContent="center"
        alignItems="center"
        padding="8px 16px 8px 16px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Create Profile"
        onClick={() => {
          buttonTwoTwoZeroOneOneFiveThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Button2201153")}
      ></Button>
      <Icon
        width="76px"
        height="67px"
        viewBox={{ minX: 0, minY: 0, width: 76, height: 67 }}
        paths={[
          {
            d: "M38 0L46.5315 23.1479L74.1402 23.1479L51.8043 37.4541L60.3358 60.6021L38 46.2959L15.6642 60.6021L24.1957 37.4541L1.85985 23.1479L29.4685 23.1479L38 0Z",
            fill: "rgba(4,125,149,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="20px"
        left="40px"
        {...getOverrideProps(overrides, "Star 1")}
      ></Icon>
    </View>
  );
}
