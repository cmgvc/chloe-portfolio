export interface TravelPhoto {
  src: string;
  caption: string;
  size: "large" | "portrait" | "small";
  pos?: string;
}

export const photos: TravelPhoto[] = [
  {
    src: "/images/travel/iaovalley.jpeg",
    caption: "Iao Valley, Hawaii",
    size: "large",
    pos: "object-[50%_50%]",
  },
  {
    src: "/images/travel/roadtohana.jpeg",
    caption: "Road to Hana, Maui",
    size: "portrait",
    pos: "object-[90%_60%]",
  },
  {
    src: "/images/travel/maui_sunset.jpeg",
    caption: "Maui sunset",
    size: "small",
    pos: "object-[50%_80%]",
  },
  {
    src: "/images/travel/iaovalley2.jpeg",
    caption: "Iao Valley, Hawaii",
    size: "small",
    pos: "object-[10%_60%]",
  },
  {
    src: "/images/travel/volcano.jpeg",
    caption: "Tropical storm in Volcano, Hawaii",
    size: "portrait",
    pos: "object-[50%_50%]",
  },
  {
    src: "/images/travel/akakafalls.jpeg",
    caption: "'Akaka Falls, Hawaii",
    size: "portrait",
    pos: "object-[50%_50%]",
  },
  {
    src: "/images/travel/haleakala_group.jpeg",
    caption: "Haleakala National Park, Maui",
    size: "large",
    pos: "",
  },
  {
    src: "/images/travel/haleakala_sunset.jpeg",
    caption: "Haleakala Sunset",
    size: "portrait",
    pos: "",
  },
  {
    src: "/images/travel/texas.jpeg",
    caption: "San Antonio, Texas",
    size: "small",
    pos: "object-[90%_60%]",
  },
  {
    src: "/images/travel/belgrade.jpeg",
    caption: "Belgrade, Serbia",
    size: "portrait",
  },
  {
    src: "/images/travel/ibiza.jpeg",
    caption: "Ibiza, Spain",
    size: "portrait",
  },
  {
    src: "/images/travel/ibiza_swim.jpeg",
    caption: "Balearic Sea, Spain",
    size: "small",
    pos: "object-[60%_90%]",
  },
  {
    src: "/images/travel/ibiza_beach.jpeg",
    caption: "Ibiza, Spain",
    size: "portrait",
  },
  {
    src: "/images/travel/zurich.jpeg",
    caption: "Zurich, Switzerland",
    size: "portrait",
  },
  {
    src: "/images/travel/zurich_swans.jpeg",
    caption: "Swans in Zurich",
    size: "small",
  },
  {
    src: "/images/travel/zurich_lake.jpeg",
    caption: "Zurich Lake",
    size: "portrait",
  },
  {
    src: "/images/travel/lindeman.jpeg",
    caption: "Lindeman Lake, British Columbia",
    size: "portrait",
  },
  {
    src: "/images/travel/whiterock.jpeg",
    caption: "White Rock, British Columbia",
    size: "small",
    pos: "object-[20%_50%]",
  },
  {
    src: "/images/travel/granville.jpeg",
    caption: "Granville Island, Vancouver",
    size: "portrait",
  },
  {
    src: "/images/travel/deepcove.jpeg",
    caption: "Deep Cove, Vancouver",
    size: "small",
    pos: "object-[80%_50%]",
  },
];
