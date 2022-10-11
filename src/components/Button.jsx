import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ height: 24, width: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({
  minWidth,
  fontSize,
  text,
  handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        minWidth,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
