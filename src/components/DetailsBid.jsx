import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={bid.image}
          resizeMode="contain"
          style={{ width: 48, height: 48, borderRadius: 4 }}
        />
        <View style={{ marginLeft: SIZES.base }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            Bid placed by {bid.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
              marginTop: 3,
            }}
          >
            {bid.date}
          </Text>
        </View>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
