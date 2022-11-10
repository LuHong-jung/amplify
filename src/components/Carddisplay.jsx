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
import { Button, Image, TextField, View } from "@aws-amplify/ui-react";
export default function Carddisplay(props) {
  const { Card, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="420px"
      height="400px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(209,211,255,0.3)"
      {...rest}
      {...getOverrideProps(overrides, "Carddisplay")}
    >
      <TextField
        display="flex"
        position="absolute"
        top="28px"
        left="60px"
        direction="column"
        width="180px"
        padding="0px 0px 0px 0px"
        label="部署"
        placeholder={Card?.department}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "TextField35482735")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="106px"
        left="60px"
        direction="column"
        width="180px"
        padding="0px 0px 0px 0px"
        label="名前"
        placeholder={Card?.name}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "TextField35482761")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="184px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="番号"
        placeholder={Card?.Nunber}
        size="small"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35482742")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="262px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="ステータス"
        placeholder={Card?.status}
        size="small"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35482749")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="340px"
        left="184px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={false}
        variation="primary"
        children="編集"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="120px"
        height="134px"
        position="absolute"
        top="49px"
        left="266px"
        padding="0px 0px 0px 0px"
        src={Card?.image_url}
        {...getOverrideProps(overrides, "6322f1ab7639b 1")}
      ></Image>
    </View>
  );
}
