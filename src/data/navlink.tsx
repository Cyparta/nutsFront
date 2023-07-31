import { type } from "os";
import imagenuts1 from "../../src/assets/nuts/Ellipse10.png";
import imagenuts2 from "../../src/assets/nuts/Ellipse11.png";
import imagenuts3 from "../../src/assets/nuts/Ellipse9.png";
import imagenuts4 from "../../src/assets/nuts/Ellipse12.png";
import imagenuts5 from "../../src/assets/nuts/Ellipse13.png";
import imagenuts6 from "../../src/assets/nuts/Ellipse14.png";
import imagenuts7 from "../../src/assets/nuts/Ellipse15.png";
import imagenuts8 from "../../src/assets/nuts/Ellipse16.png";
import imagenuts9 from "../../src/assets/nuts/Ellipse4.png";
import imagenuts10 from "../../src/assets/nuts/Ellipse5.png";

export let linknave = [
  {
    name: "Home",
    href: "home",
    type: "noMenu",
  },
  {
    name: "Nuts & Snacks",
    href: "nuts",
    type: "menu",
  },
  {
    name: "TURKISH DELIGHTS",
    href: "turkish",
    type: "menu",
  },
  {
    name: "CHOCOLATES & SWEETS",
    href: "chocolates",
    type: "menu",
  },
  {
    name: "COFFEE",
    href: "coffee",
    type: "noMenu",
  },
  {
    name: "SPICES",
    href: "spices",
    type: "noMenu",
  },
  {
    name: "GIFTS",
    href: "gifts",
    type: "noMenu",
  },
];
interface nutstype {
  title: string;
  name: string;
}

type ArrayType = nutstype[];

export const nutsandsnacks:any = {
  Nuts: [
    { title: "Almonds", name: "almonds",href:"almonds" },
    { title: "Cashews", name: "cashews",href:"cashews"},
    { title: "Pistachios", name: "pistachios",href:"pistachios" },
    { title: "Hazelnuts", name: "hazelnuts",href:"hazelnuts" },
    { title: "Chick Peas", name: "clickpeas",href:"clickpeas" },
    { title: "Peanuts", name: "peanuts",href:"peanuts" },
    { title: "Mixed Nuts", name: "mixednuts",href:"mixednuts" },
  ],
  Snacks: [
    { title: "Roasted Corn", name: "roastedcorn",href:"roastedcorn" },
    { title: "Flavored Peanut", name: "flavoredpeanut",href:"flavoredpeanut" },
    { title: "Green Peas", name: "greenpeas",href:"greenpeas" },
    { title: "Mixed Snacks", name: "mixedsnacks",href:"mixedsnacks" },
  ],
  Seeds: [
    { title: "Pumpkin", name: "pumpkin",href:"pumpkin" },
    { title: "Squash Seeds", name: "squashseeds",href:"squashseeds" },
    { title: "Sunflower Seeds", name: "sunflowerseeds",href:"sunflowerseeds" },
    { title: "Watermelon Seeds", name: "watermelonseeds",href:"watermelonseeds" },
  ],
};
export const imagenuts = [imagenuts1, imagenuts2, imagenuts3, imagenuts4];
export const turkeish:any = {
  "Wrapp Turkish Delights": [
    {
      title: "Almond Paste Pistachio Wrap",
      name: "almondPastePistachioWrap",
        href:"pastapistachio"
    },
    { title: "Figs Walnut Pistachio Wrap", name: "Figs Walnut Pistachio Wrap",href:"walnutpistachio" },
    { title: "Apple Pistachio Wrap", name: "Apple Pistachio Wrap",href:"applepistachio" },
    { title: "Shop All", name: "Shop All",href:"/" },
  ],
  "LOKUM TURKISH DELIGHTS": [
    {
      title: "Pistachio Pomegranate Lukon",
      name: "Pistachio Pomegranate Lukon",
      href:"pomegranate"
    },
    {
      title: "Knafeh Honey Pistachio Lukon ",
      name: "Knafeh Honey Pistachio Lukon ",
      href:"knafehhoney"
    },
    { title: "Lemon Pistachio Lukon", name: "Lemon Pistachio Lukon" ,href:"lemonpistachio"},
    { title: "Shop All", name: "Shop All",href:"/" },
  ],
  "TRADITIONAL TURKISH DELIGHTS": [
    { title: "Orange Lukon", name: "Orange Lukon",href:"orangelukon" },
    { title: "Kiwi Lukon", name: "Kiwi Lukon",href:"kiwilukon" },
    { title: "Lemon Lukon", name: "Lemon Lukon",href:"lemonlukon" },
    { title: "Shop All", name: "Shop All",href:"/" },
  ],
};
export const imageturkeish = [imagenuts5, imagenuts6, imagenuts7];
export const chocolates:any = {
  CHOCOLATES: [
    { title: "Milk Chocolate", name: "Milk Chocolate",href:"milkchocolate" },
    { title: "Dark Chocolate", name: "Dark Chocolate",href:"darkchocolate" },
    { title: "Chocolate Bits", name: "Chocolate Bits",href:"chocolatebits" },
    { title: "Chocolate Gifts", name: "Chocolate Gifts",href:"chocolategifts" },
  ],
  "DRIED FRUITS": [
    { title: "Dried Fruit", name: "Dried Fruit" ,href:"driedfruit"},
    { title: "Dehydrated Fruit", name: "Dehydrated Fruit" ,href:"dehydrated"},
  ],
  SWEETS: [
    { title: "Halal Gummy", name: "Halal Gummy",href:"halalgummy" },
    { title: "Raha", name: "Raha",href:"raha" },
    { title: "Nougat", name: "Nougat",href:"nougat" },
    { title: "Halva", name: "Halva" ,href:"halva"},
  ],
};
export const imagechocolates = [imagenuts8];
export const detailofimgnut = [
  {
    id: 0,
    image: imagenuts1,
    detail: `Gummy candies are made mostly of corn syrup, sucrose, gelatin, starch 
and water. In addition, minor amounts of coloring and flavoring agents are used. 
Food acids such as citric acid and malic acid are also added in order to give a tart 
flavor to gummies. It is often that other gelling agents are used in place of gelatin 
to make gummy candies suitable for vegans or vegetarians, such as starch and pectin`,
    title: "candy",
  },
  {
    id: 1,
    image: imagenuts9,
    detail: `milk chocolate lovers to enjoy an irresistible combination of textures and flavours.
An indulgent sensation of a velvety filling with crunchy hazelnut pieces and fine
Californian Almond inclusions, softly wrapped within smooth milk chocolate layers.`,
    title: "Milk Chocolate Almonds And Hazelnut",
  },
  {
    id: 2,
    image: imagenuts3,
    detail: `nut is a fruit consisting of a hard or tough nutshell protecting a kernel which
is usually edible. In general usage and in a culinary sense, a wide variety of
dry seeds are called nuts, but in a botanical context "nut" implies that the
shell does not open to`,
    title: "Nuts",
  },
  {
    id: 3,
    image: imagenuts10,
    detail: `Our exclusive quality chopped Salted Mixed Nuts without seeds are exceptional
having almonds, walnuts, hazelnuts, cashews, peanuts but do not contain seeds.
These mix nuts are one of the essential ingredients of many baking and cooking
recipes. They can also be used as snacks. Our Mixed Nuts are packed with Dietary
Fiber and protein which is beneficial for health.`,
    title: "Super Mix With Seeds And Peanuts",
  },
  {
    id: 4,
    image: imagenuts4,
    detail: `Known in hindi as "Aroo" dried peaches, are obtained by cutting and slicing
the fully riped peaches, and then dehydrating them to suck their moisture
and enhance their shelf life. Dried peaches are moist, delicious, and full of 
potassium. Dried peaches are rich in beta-carotene, which is a powerful member
of the antioxidant family.`,
    title: "Dried Peach",
  },
];
