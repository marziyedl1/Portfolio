export default {
  theme: {
    extend: {
      animation: {
        typing: "typing 3s steps(30) infinite alternate",
        cursor: "cursor 0.8s infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        cursor: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
          "100%": { borderColor: "transparent" },
        },
      },
    },
  },
}
