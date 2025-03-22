import { Dimensions, Platform } from "react-native"
import Toast, { ToastType } from "react-native-toast-message"

export const handleError = (errorName: string, error: any) => {
    if (typeof error === "string") {
        Toast.show({
            type: "custom",
            text1: `${error}`,
            props: { toastType: "error" },
        })
    } else if (error?.ExceptionMessage || error?.Message) {
        Toast.show({
            type: "custom",
            text1: `${error?.ExceptionMessage || error?.Message}`,
            props: { toastType: "error" },
        })
    }
}

export function isIOS() {
    return Platform.OS === "ios"
}


export const getShadeOfColor = (hex: string, divide: number) => {
    // Converted #Hex to (R, G, B)
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    // Convert (R, G, B) to their respective shades
    const r2 = parseInt(`${r + (255 - r) / divide}`)
    const g2 = parseInt(`${g + (255 - g) / divide}`)
    const b2 = parseInt(`${b + (255 - b) / divide}`)

    // Convert (R, G, B) to (R => #Hex, B => #Hex, G => #Hex)
    const toHex = (c: number) => {
        var hex = c.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }

    return "#" + toHex(r2) + toHex(g2) + toHex(b2)
}

export const isTypeOf = (type: "string" | "array" | "object" | "null" | "undefined" | "boolean" | "number", value: any): boolean => {
    switch (type) {
        case "string":
            return typeof value === "string"
        case "array":
            return typeof value === "object" && value && value?.length >= 0
        case "object":
            return typeof value === "object" && value && Object.keys(value)?.length >= 0
        case "boolean":
            return typeof value === "boolean"
        case "number":
            return typeof value === "number"
        case "null":
            return value === null
        case "undefined":
            return value === undefined

        default:
            return false
    }
}
