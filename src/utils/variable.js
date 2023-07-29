//Fonts
const sfReg = "SF-ProText-Regular";
const sfL = "SF-ProText-Light";
const sfSB = "SF-ProText-SemiBold";
const sfM = "SF-ProText-Medium";

//Colors
const primaryColor = "#4295E4";
const secondaryColor = "#F2F8FF"
const secondLactic = "#F9F9F9"
const dark = "#161C24";
const lightBlue = "#56A9F8";
const deepDark = "#0D2436";
const gray = "#454F5B";
const light = "#fff";
const secondLight = "#fff";
const lightGray = "#969696";
const white = "#EAEAEA";
const lactic = "#FAFAFA";
const storm = "#F7F7F7";
const darkBlue = "#203546";
const silver = "#c4cdd5";
const titan = "#EAEFF6";
const hawkesBlue = "#cee7ff"

//Dark mode
//light = #3b3a3a
//lactic = #3b3a3a
//secondaryColor = #3b3a3a
//secondLight = #292828
//dark = #919090
//gray = #6d7278

const colors = {
    primaryColor,
    secondaryColor,
    dark,
    deepDark,
    gray,
    light,
    secondLight,
    lightGray,
    lightBlue,
    white,
    lactic,
    storm,
    secondLactic,
    darkBlue,
    silver,
    titan,
    hawkesBlue
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