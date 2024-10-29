import { nanoid } from "nanoid";
import { dataStatsType } from "./_types";

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
  "Technology leader and timeless sculpture: the 911 Turbo gave the design philosophy “form follows function” an even more exciting meaning – and created a legend that continues to fascinate today."
];
