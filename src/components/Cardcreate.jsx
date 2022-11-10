/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { CardData } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Heading,
  SelectField,
  TextField,
  View,
} from "@aws-amplify/ui-react";

export default function Cardcreate(props) {
  const closeModal = () => {props.setShowModal(false);};
  const { Card, overrides, ...rest } = props;
  const [
    textFieldThreeFiveFourEightTwoEightEightTwoValue,
    setTextFieldThreeFiveFourEightTwoEightEightTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightEightThreeValue,
    setTextFieldThreeFiveFourEightTwoEightEightThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightEightOneValue,
    setTextFieldThreeFiveFourEightTwoEightEightOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightEightFourValue,
    setTextFieldThreeFiveFourEightTwoEightEightFourValue,
  ] = useStateMutationAction("");
  const buttonThreeFiveFourEightTwoNineThreeTwoOnClick =
    useDataStoreCreateAction({
      fields: {
        name: textFieldThreeFiveFourEightTwoEightEightTwoValue,
        Nunber: textFieldThreeFiveFourEightTwoEightEightThreeValue,
        department: textFieldThreeFiveFourEightTwoEightEightOneValue,
        image_url: textFieldThreeFiveFourEightTwoEightEightFourValue,
      },
      model: CardData,
      schema: schema,
    });
  const buttonThreeFiveFourEightTwoNineThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    props.showFlag ? (
      <div id="overlay" style={overlay}>
      <div id="modalContent" style={modalContent}>
      <View
        width="420px"
        height="540px"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(209,211,255,0.3)"
        {...rest}
        {...getOverrideProps(overrides, "Cardcreate")}
      >
        <TextField
          display="flex"
          position="absolute"
          top="104px"
          left="60px"
          direction="column"
          width="300px"
          padding="0px 0px 0px 0px"
          label="部署"
          placeholder="部署"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          value={textFieldThreeFiveFourEightTwoEightEightOneValue}
          onChange={(event) => {
            setTextFieldThreeFiveFourEightTwoEightEightOneValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField35482881")}
        ></TextField>
        <TextField
          display="flex"
          position="absolute"
          top="182px"
          left="60px"
          direction="column"
          width="300px"
          padding="0px 0px 0px 0px"
          label="名前"
          placeholder="名前"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          value={textFieldThreeFiveFourEightTwoEightEightTwoValue}
          onChange={(event) => {
            setTextFieldThreeFiveFourEightTwoEightEightTwoValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField35482882")}
        ></TextField>
        <TextField
          display="flex"
          position="absolute"
          top="260px"
          left="60px"
          direction="column"
          width="300px"
          padding="0px 0px 0px 0px"
          label="番号"
          placeholder="番号"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          value={textFieldThreeFiveFourEightTwoEightEightThreeValue}
          onChange={(event) => {
            setTextFieldThreeFiveFourEightTwoEightEightThreeValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField35482883")}
        ></TextField>
        <TextField
          display="flex"
          position="absolute"
          top="416px"
          left="60px"
          direction="column"
          width="300px"
          padding="0px 0px 0px 0px"
          label="Image_URL"
          placeholder="Image_URL"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          value={textFieldThreeFiveFourEightTwoEightEightFourValue}
          onChange={(event) => {
            setTextFieldThreeFiveFourEightTwoEightEightFourValue(
              event.target.value
            );
          }}
          {...getOverrideProps(overrides, "TextField35482884")}
        ></TextField>
        <Heading
          display="flex"
          gap="0"
          position="absolute"
          top="44px"
          left="33px"
          padding="0px 0px 0px 0px"
          level="3"
          children="プロフィール登録"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <SelectField
          display="flex"
          position="absolute"
          top="338px"
          left="60px"
          direction="column"
          width="300px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="ステータス"
          placeholder="ステータスを選択してください"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        >
            <option value="設定なし">設定なし</option>
            <option value="出勤">出勤</option>
            <option value="不在">不在</option>
            <option value="離席">離席</option>
            <option value="休み">休み</option>
            <option value="会議中">会議中</option>
        </SelectField>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="494px"
          left="60px"
          justifyContent="center"
          alignItems="center"
          size="small"
          isDisabled={false}
          variation="primary"
          children="　新規登録　"
          onClick={() => {
            closeModal();
            buttonThreeFiveFourEightTwoNineThreeTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Button35482932")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="494px"
          left="266px"
          justifyContent="center"
          alignItems="center"
          size="small"
          isDisabled={false}
          variation="link"
          children="キャンセル"
          onClick={() => {
            closeModal();
            buttonThreeFiveFourEightTwoNineThreeThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button35482933")}
        ></Button>
      </View>
      </div>
        </div>
    ) : (
      <></>// showFlagがfalseの場合はModalは表示しない
    )
  );
}
const modalContent = {
  background: "white",
  padding: "10px",
  borderRadius: "3px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(256,256,256,0.5)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

