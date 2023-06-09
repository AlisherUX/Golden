//Fonts
const sfReg = "SF-ProText-Regular";
const sfL = "SF-ProText-Light";
const sfSB = "SF-ProText-SemiBold";
const sfM = "SF-ProText-Medium";

//Colors
const primaryColor = "#4295E4";
const secondaryColor = "#F2F8FF"
const dark = "#161C24";
const lightBlue = "#56A9F8";
const deepDark = "#0D2436";
const gray = "#454F5B";
const light = "#fff";
const lightGray = "#A4A4A4";
const white = "#EAEAEA";
const lactic = "#FAFAFA";
const whiteBlue = "#F7F7F7";

const colors = {
    primaryColor,
    secondaryColor,
    dark,
    deepDark,
    gray,
    light,
    lightGray,
    lightBlue,
    white,
    lactic,
    whiteBlue
}

const fonts = {
    sfSB,
    sfM,
    sfReg,
    sfL
}

export const adaptiveValue = (property, startSize, minSize) => {
    const addSize = startSize - minSize;
    return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

export { colors, fonts };