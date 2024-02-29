/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "750px",
        md: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        min_color: "#2a74ed",
        max_color: "#222222",
      },
      boxShadow: {
        nav: "2px 0 12px 0 rgba(0,0,0,.15)",
      },
      keyframes: {
        hedar: {
          from: { top: "-60px", opacity: "0" },
          to: { top: "0", opacity: "1" },
        },
        blank: {
          "0%": { "background-color": "#222222" },
          "100%": { "background-color": "transparent" },
        },
        puls: {
          "0%": {
            boxShadow: "0 0 0 0 transparent",
          },
          "40%": {
            boxShadow: "0 0 0 0 transparent",
          },

          "50%": {
            boxShadow: "0 0 0 1px rgba(219,213,213)",
          },
          "60%": {
            boxShadow: "0 0 0 3px rgba(219,213,213)",
          },
          "70%": {
            boxShadow: "0 0 0 5px rgba(219,213,213,70%)",
          },
          "80%": {
            boxShadow: "0 0 0 6px rgba(219,213,213,60%)",
          },

          "100%": {
            boxShadow: "0 0 0 6px  transparent",
          },
        },
        scale: {
          "0%": {
            transform: "scale(.80)",
            opacity: ".5",
          },

          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        ml: {
          "0%": {
            " margin-left": " -0.5rem",
            opacity: "0",
          },

          "100%": {
            "  margin-left": " 0.25rem",
            opacity: "1",
          },
        },
        Popp: {
          "0%": {
            right: " -500px",
            opacity: "0",
          },

          "100%": {
            right: " 0",
            opacity: "1",
          },
        },
        close: {
          "0%": {
            right: " 0",
            opacity: "1",
          },

          "100%": {
            right: " -500px",
            opacity: "0",
          },
        },
      },

      backgroundPosition: {
        "bottom-center": " bottom center",
      },

      gridTemplateColumns: {
        footer: "repeat(auto-fill, minmax(320px, 1fr));",
        footer2: "repeat(auto-fill, minmax(240px, 1fr));",
        footer3: "repeat(auto-fill, minmax(200px, 1fr));",
        bolg: "repeat(auto-fill, minmax(350px, 1fr));",
        Products: "  1fr 1fr 20%;",
      },
    },
  },
  plugins: [],
};
