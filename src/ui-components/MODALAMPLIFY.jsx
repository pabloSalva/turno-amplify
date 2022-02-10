/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function MODALAMPLIFY(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="289px"
      height="145px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            boxShadow="0px 24px 38px rgba(0, 0, 0, 0.14000000059604645)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "View.View[0].View[0].View[0]")}
          ></View>
          <View
            padding="0px 0px 0px 0px"
            width="289px"
            height="67.3214340209961px"
            position="absolute"
            top="77.6785659790039px"
            left="0px"
            {...getOverrideProps(overrides, "View.View[0].View[0].View[1]")}
          >
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[0].View[1].View[0]"
              )}
            >
              <View
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                border="0px SOLID rgba(150.9600019454956,150.9600019454956,150.9600019454956,1)"
                borderRadius="0px 0px 4px 4px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "View.View[0].View[0].View[1].View[0].View[0]"
                )}
              ></View>
            </View>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,0.6000000238418579)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.41000000000000003px"
            width="242px"
            position="absolute"
            top="21px"
            left="24px"
            padding="0px 0px 0px 0px"
            children="¿Confirma la llegada de Volkswagen Golf 2.1 GTI &#xA;Placa AB981DU?"
            {...getOverrideProps(overrides, "View.View[0].View[0].Text[0]")}
          ></Text>
        </View>
      </View>
      <Button
        gap="0"
        position="absolute"
        padding="8px 12px 8px 12px"
        display="flex"
        top="62.06896551724138%"
        bottom="14.482758620689657%"
        left="63.32179930795848%"
        right="4.1522491349480966%"
        width="94px"
        height="34px"
        size="small"
        variation="primary"
        children="ACEPTAR"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
      <Button
        gap="0"
        position="absolute"
        padding="8px 12px 8px 12px"
        display="flex"
        top="62.06896551724138%"
        bottom="14.482758620689657%"
        left="35.6401384083045%"
        right="41.17647058823529%"
        width="67px"
        height="34px"
        size="small"
        variation="link"
        children="SALIR"
        {...getOverrideProps(overrides, "View.Button[1]")}
      ></Button>
    </View>
  );
}
