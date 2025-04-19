import LocalFont from "next/font/local"

const font = LocalFont({
  src: [
    {
        path:"../../public/fonts/Pokemon.ttf",
        weight: "400",
        style: "normal",
    }
  ],
  display: "swap",
})

export default font