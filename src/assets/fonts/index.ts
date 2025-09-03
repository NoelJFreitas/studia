export const APP_FONTS = {
  poppinsBlack: require("./Poppins-Black.ttf"),
  poppinsBold: require("./Poppins-Bold.ttf"),
  poppinsLight: require("./Poppins-Light.ttf"),
  poppinsMedium: require("./Poppins-Medium.ttf"),
  poppinsRegular: require("./Poppins-Regular.ttf"),
};

type AppFontKeys = keyof typeof APP_FONTS;

export const APP_FONT_FAMILY: Record<AppFontKeys, string> = {
  poppinsBlack: "poppinsBlack",
  poppinsBold: "poppinsBold",
  poppinsLight: "poppinsLight",
  poppinsMedium: "poppinsMedium",
  poppinsRegular: "poppinsRegular",
};
