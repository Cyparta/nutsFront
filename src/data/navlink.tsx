import { type } from "os"
import imagenuts1 from "../../src/assets/nuts/Ellipse10.png"
import imagenuts2 from "../../src/assets/nuts/Ellipse11.png"
import imagenuts3 from "../../src/assets/nuts/Ellipse9.png"
import imagenuts4 from "../../src/assets/nuts/Ellipse12.png"
import imagenuts5 from "../../src/assets/nuts/Ellipse13.png"
import imagenuts6 from "../../src/assets/nuts/Ellipse14.png"
import imagenuts7 from "../../src/assets/nuts/Ellipse15.png"
import imagenuts8 from "../../src/assets/nuts/Ellipse16.png"

export let linknave = [{
    name: "Home",
    href: "home",
    type: "noMenu"
}, {
    name: "Nuts & Snacks",
    href: "nuts",
    type: "menu",

}, {
    name: "TURKISH DELIGHTS",
    href: "turkish",
    type: "menu",

}, {
    name: "CHOCOLATES & SWEETS",
    href: "chocolates",
    type: "menu",

}, {
    name: "COFFEE",
    href: "coffee",
    type: "noMenu",

}, {
    name: "SPICES",
    href: "spices",
    type: "noMenu",

}, {
    name: "GIFTS",
    href: "gifts",
    type: "noMenu",

}]
interface nutstype{
    title:string,
    name:string
}

type ArrayType=nutstype[]

export const nutsandsnacks = { Nuts: [{ title: "Almonds", name: "almonds" }, { title: "Cashews", name: "cashews" }, { title: "Pistachios", name: "pistachios" }, { title: "Hazelnuts", name: "hazelnuts" }, { title: "Chick Peas", name: "clickpeas" }, { title: "Peanuts", name: "peanuts" }, { title: "Mixed Nuts", name: "mixednuts" }] ,
Snacks: [{ title: "Roasted Corn", name: "roastedcorn" },{ title: "Flavored Peanut", name: "flavoredpeanut" },{ title: "Green Peas", name: "greenpeas" },{title:"Mixed Snacks",name:"mixedsnacks"}] ,
Seeds: [{ title: "Pumpkin", name: "pumpkin" },{ title: "Squash Seeds", name: "squashseeds" },{ title: "Sunflower Seeds", name: "sunflowerseeds" },{title:"Watermelon Seeds",name:"watermelonseeds"}]  }
export const imagenuts=[
    imagenuts1,imagenuts2,imagenuts3,imagenuts4
]
export const turkeish = { "Wrapp Turkish Delights": [{ title: "Almond Paste Pistachio Wrap", name: "Almond Paste Pistachio Wrap" }, { title: "Figs Walnut Pistachio Wrap", name: "Figs Walnut Pistachio Wrap" }, { title: "Apple Pistachio Wrap", name: "Apple Pistachio Wrap" }, { title: "Shop All", name: "Shop All" }] ,
"LOKUM TURKISH DELIGHTS": [{ title: "Pistachio Pomegranate Lukon", name: "Pistachio Pomegranate Lukon" },{ title: "Knafeh Honey Pistachio Lukon ", name: "Knafeh Honey Pistachio Lukon " },{ title: "Lemon Pistachio Lukon", name: "Lemon Pistachio Lukon" },{title:"Shop All",name:"Shop All"}] ,
"TRADITIONAL TURKISH DELIGHTS": [{ title: "Orange Lukon", name: "Orange Lukon" },{ title: "Kiwi Lukon", name: "Kiwi Lukon" },{ title: "Lemon Lukon", name: "Lemon Lukon" },{title:"Shop All",name:"Shop All"}]  }
export const imageturkeish=[
    imagenuts5,imagenuts6,imagenuts7
]
export const  chocolates = { "CHOCOLATES": [{ title: "Milk Chocolate", name: "Milk Chocolate" }, { title: "Dark Chocolate", name: "Dark Chocolate" }, { title: "Chocolate Bits", name: "Chocolate Bits" }, { title: "Chocolate Gifts", name: "Chocolate Gifts" }] ,
"DRIED FRUITS": [{ title: "Dried Fruit", name: "Dried Fruit" },{ title: "Dehydrated Fruit", name: "Dehydrated Fruit" }] ,
"SWEETS": [{ title: "Halal Gummy", name: "Halal Gummy" },{ title: "Raha", name: "Raha" },{ title: "Nougat", name: "Nougat" },{title:"Halva",name:"Halva"}]  }
export const imagechocolates=[
    imagenuts8
]