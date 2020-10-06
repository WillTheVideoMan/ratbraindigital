/**
 * The base line height, units in em;
 */
const baseLineHeight = 1.666

/**
 * The font scaling parameter. The size of each font is based from the root font size, multiplied by the scaling factor.
 */
const fontScale = 1.333

const COLOURS = {
  primary: "#fff",
  accent: "#c50beb",
  background: "#333",
}

const TYPOGRAPHY = {
  fontFamily: {
    heading: "Staatliches",
    body: "Staatliches",
  },
  fontSize: {
    heading: {
      massive: `${Math.pow(fontScale, 5)}rem`,
      primary: `${Math.pow(fontScale, 3)}rem`,
      secondary: `${Math.pow(fontScale, 2)}rem`,
      tertiary: `${Math.pow(fontScale, 1)}rem`,
    },
    body: {
      regular: "1rem",
      small: `${Math.pow(fontScale, -1)}rem`,
    },
  },
  lineHeight: {
    heading: `${baseLineHeight - 0.8}`,
    body: `${baseLineHeight}`,
  },
}

const SPACING = {
  main: {
    major: `${baseLineHeight - 0.5}rem`,
    minor: 0,
  },
  accent: {
    major: `${(baseLineHeight - 0.5) * 3}rem`,
    minor: `${baseLineHeight - 0.5}rem`,
  },
}

module.exports = {
  COLOURS,
  TYPOGRAPHY,
  SPACING,
}