import { nanoid } from "nanoid";
import { dataStatsType } from "./_types";
import { dataCarouselType } from "./_types";

//for carousel one
import carousel11 from "@/public/carousel11.avif";
import carousel12 from "@/public/carousel12.avif";
import carousel13 from "@/public/carousel13.avif";
import carousel14 from "@/public/carousel14.avif";
import carousel15 from "@/public/carousel15.avif";
import carousel17 from "@/public/carousel17.avif";
import carousel18 from "@/public/carousel18.avif";
import carousel19 from "@/public/carousel19.avif";

//for carousel two
import carousel21 from "@/public/courousel21.avif";
import carousel22 from "@/public/carousel22.avif";
import carousel23 from "@/public/carousel23.avif";
import carousel24 from "@/public/carousel24.avif";
import carousel25 from "@/public/carousel25.avif";

//frop carousel three
import chrono from '@/public/carouselchrono.avif'
import turbo from '@/public/turboturbo.avif'
import wheel from '@/public/wheel.avif'
import wallet from '@/public/wallet.avif'
import letter from '@/public/letter.avif'
import carousel36 from "@/public/carousel36.avif";


//for card 
import sander from  "@/public/sonder.avif"
import manufacture from '@/public/manufacture.avif'
import contact from '@/public/contact.avif'


export const dataHeader: string[] = [
  "Menu",
  "Porsche",
  "Icon and",
  "superlative.",
  "In 1974, the 911 Turbo proved that even the dream of a 911 could be taken even further: with a fascinating symbiosis of outstanding performance, confident elegance and pure emotion. Experience its 50th anniversary up close: at the wheel of the 911 Turbo 50 years. ",
];

export const dataUnder: string[] = [
  "911 Turbo 50 Years",
  "Gasoline",
  "Configure",
  "New and used inventory",
];

export const dataStats: dataStatsType = [
  {
    id: nanoid(),
    title: "2.7",
    sub: "s",
    text: "Acceleration 0 - 100 km/h with Sport Chrono Package",
  },
  {
    id: nanoid(),
    title: "478",
    sub: "kW / ",
    text: "Power (kW)/Power (hp)",
    title2: "640",
    sub2: "hp",
  },
  {
    id: nanoid(),
    title: "330",
    sub: "km/h ",
    text: "Top track speed with summer tires",
  },
];

export const phraseStat: string = "View all technical details";

export const dataTurbo: string[] = [
  "The legend of  the 911 Turbo",
  "Technology leader and timeless sculpture: the 911 Turbo gave the design philosophy “form follows function” an even more exciting meaning – and created a legend that continues to fascinate today.",
];

export const dataCarouselOne: dataCarouselType = [
  {
    id: 1,
    image: carousel11,
    title: "911 RSR Turbo.",
  },
  {
    id: 2,
    image: carousel12,
    title: "The 911 Turbo “No. 1”.",
  },
  {
    id: 3,
    image: carousel13,
    title: "911 Turbo (930). ",
  },
  {
    id: 4,
    image: carousel14,
    title: "Tartan pattern.",
  },
  {
    id: 5,
    image: carousel15,
    title: "Flat nose.",
  },
  {
    id: 6,
    image: carousel17,
    title: "911 Turbo S Exclusive Series.",
  },
  {
    id: 7,
    image: carousel18,
    title: "Cinematic performances. ",
  },
  {
    id: 8,
    image: carousel19,
    title: "The superlative “Turbo”.",
  },
];

export const dataNine: string[] = [
  "The one and always.",
  "The 911 Turbo has left its mark on the world of sports cars. This iconic model can look back on 50 years of glorious history, with newly interpreted design elements from the past and increased performance from the present.",
];

export const dataCarouselTwo: dataCarouselType = [
  {
    id: 1,
    image: carousel21,
    title: "Limited anniversary edition.",
  },
  {
    id: 2,
    image: carousel22,
    title: "Exterior.",
  },
  {
    id: 3,
    image: carousel23,
    title: "Interior.",
  },
  {
    id: 4,
    image: carousel24,
    title: "Heritage Design package.",
  },
  {
    id: 5,
    image: carousel25,
    title: "Porsche Design Chronograph. ",
  },
];

export const stringCrouselTwo = "Highlights.";

export const string360view: string[] = [
  "50 years of Turbo. In 360 degrees.",
  "Interior",
  "Exterior",
  "Start 360° view",
];

export const stringCarouselThree: string = "Heritage Design package.";

export const dataCarouselthree: dataCarouselType = [
  {
    id: 1,
    image: turbo,
    title: "Exclusive nostalgia.",
  },
  {
    id: 2,
    image: wheel,
    title: "Sport Classic wheel",
  },
  {
    id: 3,
    image: letter,
    title: "Lettering and decorative graphics.",
  },
  {
    id: 4,
    image: wallet,
    title: "Interior.",
  },
  {
    id: 5,
    image: chrono,
    title: "Sport Chrono watch. ",
  },
  {
    id: 6,
    image: carousel36,
    title: "Embossing.",
  },
];


export const dataLastSection : string[] =  [

  "Porsche Design Chonograph.",
  "Limited to 1,974 pieces, the Porsche Design Chronograph 911 Turbo 50 Years combines classic design with modern technology.",
  "To the Chronograph"
]


export  const  dataCard =  [
  {id: 1, image: manufacture, title: "Personalization and finishing", button : "To Porsche Exclusive Manufaktur", text : "Discover Porsche Exclusive Manufaktur's customization options for the interior and exterior of your vehicle."},
  {id: 2, image: sander, title: "Porsche Sonderwunsch.", button : "To Porsche Sonderwunsch", text : "Do you want even more individuality? Have your personal design and equipment wishes installed in the vehicle directly ex-works."},
  {id: 3, image: contact, title: "Contact. ", button : "Go to contact form", text : "Contact a Porsche Centre near you."},
] 
