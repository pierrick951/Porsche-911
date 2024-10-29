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
