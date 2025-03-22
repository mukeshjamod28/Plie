import { StyleSheet } from "react-native";
import { scale, scaleModerate, scaleVertical } from "../../Helpers/helper.scale";

export const AppStyles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        elevation: 3,
        shadowRadius: 3,
        borderRadius: scaleModerate(16),
    },

    flexFill: {
        flex: 1
    },

    // ============ Overflow ============
    overflowVisible: {
        overflow: "visible"
    },
    overflowHidden: {
        overflow: "hidden"
    },
    overflowScroll: {
        overflow: "scroll"
    },

    // ============ Height ============
    hAuto: {
        height: "auto"
    },
    h100: {
        height: "100%"
    },
    h50: {
        height: "50%"
    },
    h0: {
        height: 0
    },


    // ============ width ============
    wAuto: {
        width: "auto"
    },
    w100: {
        width: "100%"
    },
    w50: {
        width: "50%"
    },
    w0: {
        width: 0
    },

    // ============ Display ============
    dFlex: {
        display: "flex"
    },
    dNone: {
        display: "none"
    },

    // ============ Gap ============
    gap0: {
        gap: 0
    },
    gap1: {
        gap: scaleModerate(4)
    },
    gap2: {
        gap: scaleModerate(8)
    },
    gap3: {
        gap: scaleModerate(16)
    },
    gap4: {
        gap: scaleModerate(24)
    },

    // ============ Rounded ============
    rounded0: {
        borderRadius: 0
    },
    rounded1: {
        borderRadius: scaleModerate(4)
    },
    rounded2: {
        borderRadius: scaleModerate(8)
    },
    rounded3: {
        borderRadius: scaleModerate(16)
    },
    rounded4: {
        borderRadius: scaleModerate(24)
    },


    // ============ Flex Direction ============
    flexRow: {
        flexDirection: "row"
    },
    flexCol: {
        flexDirection: "column"
    },

    // ============ Flex Wrap ============
    flexWrap: {
        flexWrap: "wrap"
    },
    flexNoWrap: {
        flexWrap: "nowrap"
    },
    flexWrapReverse: {
        flexWrap: "wrap-reverse"
    },

    // ============ Position ============
    positionRelative: {
        position: "relative"
    },
    positionAbsolute: {
        position: "absolute"
    },

    // ============ Align ============
    alignItemsStart: {
        alignItems: "flex-start"
    },
    alignItemsCenter: {
        alignItems: "center"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    alignItemsBaseline: {
        alignItems: "baseline"
    },

    // ============ Justify ============
    justifyContentEvenly: {
        justifyContent: "space-evenly",
    },
    justifyContentBetween: {
        justifyContent: "space-between",
    },
    justifyContentAround: {
        justifyContent: "space-around",
    },
    justifyContentStart: {
        justifyContent: "flex-start",
    },
    justifyContentCenter: {
        justifyContent: "center",
    },
    justifyContentEnd: {
        justifyContent: "flex-end",
    },

    // ============ Padding ============
    pAuto: {
        padding: "auto",
    },
    p0: {
        padding: 0
    },
    p1: {
        padding: scaleModerate(4),
    },
    p2: {
        padding: scaleModerate(8),
    },
    p3: {
        padding: scaleModerate(16),
    },
    p4: {
        padding: scaleModerate(24),
    },

    // ============ Padding Horizontal ============
    pxAuto: {
        paddingHorizontal: "auto",
    },
    px0: {
        paddingHorizontal: 0
    },
    px1: {
        paddingHorizontal: scale(4),
    },
    px2: {
        paddingHorizontal: scale(8),
    },
    px3: {
        paddingHorizontal: scale(16),
    },
    px4: {
        paddingHorizontal: scale(24),
    },

    // ============ Padding Vertical ============
    pyAuto: {
        paddingVertical: "auto",
    },
    py0: {
        paddingVertical: 0
    },
    py1: {
        paddingVertical: scaleVertical(4),
    },
    py2: {
        paddingVertical: scaleVertical(8),
    },
    py3: {
        paddingVertical: scaleVertical(16),
    },
    py4: {
        paddingVertical: scaleVertical(24),
    },


    // ============ Padding Top ============
    ptAuto: {
        paddingTop: "auto",
    },
    pt0: {
        paddingTop: 0
    },
    pt1: {
        paddingTop: scaleVertical(4),
    },
    pt2: {
        paddingTop: scaleVertical(8),
    },
    pt3: {
        paddingTop: scaleVertical(16),
    },
    pt4: {
        paddingTop: scaleVertical(24),
    },

    // ============ Padding Bottom ============
    pbAuto: {
        paddingBottom: "auto",
    },
    pb0: {
        paddingBottom: 0
    },
    pb1: {
        paddingBottom: scaleVertical(4),
    },
    pb2: {
        paddingBottom: scaleVertical(8),
    },
    pb3: {
        paddingBottom: scaleVertical(16),
    },
    pb4: {
        paddingBottom: scaleVertical(24),
    },

    // ============ Padding Left ============
    psAuto: {
        paddingLeft: "auto",
    },
    ps0: {
        paddingLeft: 0
    },
    ps1: {
        paddingLeft: scale(4),
    },
    ps2: {
        paddingLeft: scale(8),
    },
    ps3: {
        paddingLeft: scale(16),
    },
    ps4: {
        paddingLeft: scale(24),
    },

    // ============ Padding Right ============
    peAuto: {
        paddingRight: "auto",
    },
    pe0: {
        paddingRight: 0
    },
    pe1: {
        paddingRight: scale(4),
    },
    pe2: {
        paddingRight: scale(8),
    },
    pe3: {
        paddingRight: scale(16),
    },
    pe4: {
        paddingRight: scale(24),
    },

    // ============ Margin ============
    mAuto: {
        margin: "auto",
    },
    m0: {
        margin: 0
    },
    m1: {
        margin: scaleModerate(4),
    },
    m2: {
        margin: scaleModerate(8),
    },
    m3: {
        margin: scaleModerate(16),
    },
    m4: {
        margin: scaleModerate(24),
    },

    // ============ Margin Horizontal ============
    mxAuto: {
        marginHorizontal: "auto",
    },
    mx0: {
        marginHorizontal: 0
    },
    mx1: {
        marginHorizontal: scale(4),
    },
    mx2: {
        marginHorizontal: scale(8),
    },
    mx3: {
        marginHorizontal: scale(16),
    },
    mx4: {
        marginHorizontal: scale(24),
    },

    // ============ Margin Vertical ============
    myAuto: {
        marginVertical: "auto",
    },
    my0: {
        marginVertical: 0
    },
    my1: {
        marginVertical: scaleVertical(4),
    },
    my2: {
        marginVertical: scaleVertical(8),
    },
    my3: {
        marginVertical: scaleVertical(16),
    },
    my4: {
        marginVertical: scaleVertical(24),
    },


    // ============ Margin Top ============
    mtAuto: {
        marginTop: "auto",
    },
    mt0: {
        marginTop: 0
    },
    mt1: {
        marginTop: scaleVertical(4),
    },
    mt2: {
        marginTop: scaleVertical(8),
    },
    mt3: {
        marginTop: scaleVertical(16),
    },
    mt4: {
        marginTop: scaleVertical(24),
    },

    // ============ Margin Bottom ============
    mbAuto: {
        marginBottom: "auto",
    },
    mb0: {
        marginBottom: 0
    },
    mb1: {
        marginBottom: scaleVertical(4),
    },
    mb2: {
        marginBottom: scaleVertical(8),
    },
    mb3: {
        marginBottom: scaleVertical(16),
    },
    mb4: {
        marginBottom: scaleVertical(24),
    },

    // ============ Margin Left ============
    msAuto: {
        marginLeft: "auto",
    },
    ms0: {
        marginLeft: 0
    },
    ms1: {
        marginLeft: scale(4),
    },
    ms2: {
        marginLeft: scale(8),
    },
    ms3: {
        marginLeft: scale(16),
    },
    ms4: {
        marginLeft: scale(24),
    },

    // ============ Margin Right ============
    meAuto: {
        marginRight: "auto",
    },
    me0: {
        marginRight: 0
    },
    me1: {
        marginRight: scale(4),
    },
    me2: {
        marginRight: scale(8),
    },
    me3: {
        marginRight: scale(16),
    },
    me4: {
        marginRight: scale(24),
    },
});