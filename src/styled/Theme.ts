export const theme = {
    colors: {
        primary: "#0070f3",
        secondary: "#1c1c1e",
        background: "#f5f5f5",
        text: "#333333",
    },
    fonts: {
        main: "Arial, sans-serif",
        code: "Courier New, monospace",
    },
} as const

export type Theme = typeof theme