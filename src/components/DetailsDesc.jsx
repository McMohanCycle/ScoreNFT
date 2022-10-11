import { View, Text } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../../constants";

const DetailsDesc = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {readMore
              ? data.description
              : data.description.slice(0, 100) + "... "}
            {readMore ? (
              <Text
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
                onPress={() => setReadMore(!readMore)}
              >
                {" "}
                Show less
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
                onPress={() => setReadMore(!readMore)}
              >
                Read more
              </Text>
            )}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
