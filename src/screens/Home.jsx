import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

import { COLORS, NFTData } from "../../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length) setNftData(filteredData);
    else setNftData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={[StyleSheet.absoluteFill, { zIndex: -1 }]}>
          <View style={{ height: 250, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
