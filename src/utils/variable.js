//Colors

const primaryColor = "#4295E4";
const secondaryColor = "#F2F8FF"
const dark = "#161C24";
const deepDark = "#0D2436";
const gray = "#454F5B";
const light = "#fff";
const white = "#EAEAEA";

const colors = {
    primaryColor,
    secondaryColor,
    dark,
    deepDark,
    gray,
    light,
    white,
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

export { colors };