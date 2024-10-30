import { StaticImageData } from "next/image";

export type dataStatsType = (
  | {
      id: string;
      title: string;
      sub: string;
      text: string;
      title2?: undefined;
      sub2?: undefined;
    }
  | {
      id: string;
      title: string;
      sub: string;
      text: string;
      title2: string;
      sub2: string;
    }
)[];

export type dataCarouselType = {
  id: number;
  image: StaticImageData;
  title: string;
}[];

export type dataCarouselReduce = {
  id: number;
  image: StaticImageData;
  text: string;
  title: string;
};
