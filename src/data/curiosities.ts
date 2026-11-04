export interface Curiosity {
  id: number;
  title: string;
  tag: string;
  emoji: string;
  photo: string;
  caption: string;
  pos?: string;
}

export const curiosities: Curiosity[] = [
  {
    id: 1,
    title: "Competitive Synchro Swimming",
    tag: "Sport",
    emoji: "🌊",
    photo: "/images/hobbies/synchro.PNG",
    caption:
      "10 years of early mornings, nose clips, and laps without breathing. And no we are not allowed to touch the bottom of the pool. ",
    pos: "object-[100%_70%]",
  },
  {
    id: 2,
    title: "Aerial Silks",
    tag: "Circus arts",
    emoji: "🎪",
    photo: "/images/hobbies/aerial.JPG",
    caption:
      "Climbing fabric suspended from the ceiling and somehow convincing your body it's fine.",
  },
  {
    id: 3,
    title: "Fencing",
    tag: "Sport",
    emoji: "🤺",
    photo: "/images/hobbies/fencing.png",
    caption:
      "Footwork, bladework, and split-second decisions. Chess at full speed.",
    pos: "object-center",
  },
  {
    id: 4,
    title: "Volunteer Medical Trip to Peru",
    tag: "Travel & Service",
    emoji: "🏥",
    photo: "/images/hobbies/peru.jpg",
    caption:
      "Spent time in rural clinics outside Lima, assisting with patient care and community health outreach.",
    pos: "object-[center_40%]",
  },
  {
    id: 8,
    title: "Soccer",
    tag: "Sport",
    emoji: "⚽",
    photo: "",
    caption: "The game I never really put down.",
    pos: "object-center",
  },
  {
    id: 9,
    title: "Herbalism",
    tag: "Home apothecary",
    emoji: "🌿",
    photo: "",
    caption:
      "Tinctures, teas, and learning what can be made at the kitchen counter.",
    pos: "object-center",
  },
  {
    id: 5,
    title: "Lifeguarding",
    tag: "Certification",
    emoji: "🛟",
    photo: "",
    caption:
      "NL certified. Scanning, preventing, and occasionally pulling people out of pools.",
    pos: "object-center",
  },
  {
    id: 6,
    title: "Boxing",
    tag: "Sport",
    emoji: "🥊",
    photo: "/images/hobbies/boxing.jpeg",
    caption:
      "Early mornings, heavy bags, and learning that footwork matters more than the punch.",
    pos: "object-[90%_60%]",
  },
  {
    id: 7,
    title: "Horology",
    tag: "Craft",
    emoji: "⌚",
    photo: "/images/hobbies/horology.jpg",
    caption:
      "Mechanical watches, clock movements, and the quiet obsession of tiny machines keeping time without a battery.",
    pos: "object-[42%_32%]",
  },
  {
    id: 10,
    title: "Bouldering",
    tag: "Sport",
    emoji: "🧗",
    photo: "",
    caption: "Short problems, chalky hands, and figuring out the next hold.",
  },
  {
    id: 11,
    title: "Yoga",
    tag: "Practice",
    emoji: "🧘",
    photo: "",
    caption: "Breath, balance, and the practice I keep coming back to.",
  },
  {
    id: 12,
    title: "Flute",
    tag: "Music",
    emoji: "🪈",
    photo: "",
    caption: "A quieter instrument, and one I still pick up.",
  },
  {
    id: 13,
    title: "Guitar",
    tag: "Music",
    emoji: "🎸",
    photo: "",
    caption: "Chords at the kitchen table, mostly for myself.",
  },
];
