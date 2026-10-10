export const colors = {
  bg: "#060A12",
  raised: "#0E1626",
  line: "#1E2C42",
  text: "#E8F0FA",
  muted: "#8FA3BE",
  faint: "#5C7090",
  copper: "#3DDCFF",
  copperDeep: "#0E7490",
  ink: "#041018",
  danger: "#FF4B6A",
  dangerSoft: "#2A1520",
  sage: "#3DDC97",
  sageDeep: "#10241C",
};

export const type = {
  display: { fontFamily: "Manrope_600SemiBold", color: colors.text },
  title: { fontFamily: "Manrope_600SemiBold", color: colors.text },
  body: { fontFamily: "Manrope_400Regular", color: colors.text },
  medium: { fontFamily: "Manrope_500Medium", color: colors.text },
  label: {
    fontFamily: "Manrope_500Medium",
    color: colors.muted,
    letterSpacing: 1.4,
    textTransform: "uppercase" as const,
    fontSize: 11,
  },
};
