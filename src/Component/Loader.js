import React from "react"
import { scaleModerate } from "../Helpers/helper.scale"
import { AppStyles } from "../Assets/Styles/common"
import { ActivityIndicator, Modal, StyleSheet, View, } from "react-native"

export default function Loader({ loading = true }) {

    return (

        <Modal visible={true} contentContainerStyle={[AppStyles?.alignItemsCenter, {}]}>
            <View style={[AppStyles?.card, styles?.loaderCard]}>
                <ActivityIndicator color="red" size="small" />
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    loaderCard: {
        ...AppStyles?.justifyContentCenter,
        ...AppStyles?.alignItemsCenter,
        ...AppStyles?.rounded2,
        backgroundColor: "white",
        height: scaleModerate(80),
        width: scaleModerate(80),
    }
})
