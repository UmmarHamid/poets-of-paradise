/**
 * Poets of Paradise
 *
 * @author      Ummar Hamid
 * @copyright   Ummar Hamid
 *
 * Built by Ummar Hamid
 * @link //insert link here
 *
 */

import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { GlobalStyles } from "../themes/styles";
import { Colors } from "../themes/colors";

export default ({ style, children, hasHeader }) => (
    <SafeAreaView style={[GlobalStyles.safeArea]}>
        <View style={[GlobalStyles.container, { paddingTop: hasHeader ? 0 : GlobalStyles.container.paddingTop, marginHorizontal: "2%", }, style]}>
            <StatusBar backgroundColor={Colors.DEEP_TEAL} barStyle={"dark-content"} />
            {children}
        </View>
    </SafeAreaView>
);
