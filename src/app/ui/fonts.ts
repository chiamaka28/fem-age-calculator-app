import { Poppins } from "next/font/google";

export const poppins = Poppins({
    weight : ['400', '700', '800'],
    subsets:['latin'],
    style:['italic', 'normal'],
    variable: '--font-poppins'
})