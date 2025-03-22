import React from "react"
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { scaleModerate } from "../Helpers/helper.scale"
import { AppStyles } from "../Assets/Styles/common"

export default function ToastCard({ text1, props }) {

    const { width } = Dimensions.get("window")
    const { card, flexRow, rounded1, overflowHidden, gap2, p2, mb2, pe3 } = AppStyles

    return (
        <View style={[card, flexRow, rounded1, overflowHidden, gap2, p2, mb2, { maxWidth: width * 0.9 }]}>
            <Text style={[pe3, { fontSize: scaleModerate(16), color: 'black' }]}>
                {text1}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    toastCard: {},
    statusIconBase: {
        height: scaleModerate(18),
        width: scaleModerate(18),
        marginTop: scaleModerate(2),
    }
})



