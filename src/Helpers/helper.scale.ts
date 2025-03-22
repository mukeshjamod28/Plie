import { Dimensions } from "react-native";
import { isIOS } from "./helpers.extension";

const { width, height } = Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = isIOS() ? 350 : 350;
const guidelineBaseHeight = isIOS() ? 680 : 680;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size;
const scaleModerate = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const textScale = (size: number) => (width / guidelineBaseWidth) * size;
const textScaleVertical = (size: number) => (height / guidelineBaseHeight) * size;
const textScaleModerate = (size: number, factor = 0.5) => size + (textScale(size) - size) * factor;

export { scale, scaleVertical, scaleModerate, textScale, textScaleVertical, textScaleModerate };
