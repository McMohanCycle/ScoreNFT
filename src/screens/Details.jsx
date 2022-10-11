import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../../constants";
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 15}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 15}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log("data.bids: ", data.bids);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {/* CTA */}
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          text="Place a bid"
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              <Text
                style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                  color: COLORS.primary,
                }}
              >
                Current Bids
              </Text>
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
