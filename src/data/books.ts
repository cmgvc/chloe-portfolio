export interface Book {
  id: string;
  title: string;
  author: string;
  coverId?: string;
  cover_i?: number;
  review?: string;
  tags?: string[];
  shelf: "best" | "currently-reading";
  goodreadsUrl: string;
}

export const books: Book[] = [
  // BEST SHELF
  {
    id: "1",
    title: "Project Hail Mary",
    author: "Andy Weir",
    tags: ["Science Fiction", "Thriller"],
    shelf: "best",
    cover_i: 9780593135204,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/54493401-project-hail-mary?ac=1&from_search=true&qid=v3inO458Ha&rank=1",
  },
  {
    id: "3",
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    tags: ["Fantasy", "Epic"],
    shelf: "best",
    cover_i: 9780765311788,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/68428.Mistborn?ref=nav_sb_ss_1_6",
  },
  {
    id: "4",
    title: "Piranesi",
    author: "Susanna Clarke",
    tags: ["Fantasy", "Literary"],
    shelf: "best",
    cover_i: 9781635575637,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/50202953-piranesi?ref=nav_sb_ss_1_8",
  },
  {
    id: "5",
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    tags: ["LitRPG", "Sci-Fi", "Comedy"],
    shelf: "best",
    cover_i: 9780593820247,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/56791389-dungeon-crawler-carl?ref=nav_sb_ss_1_7",
  },
  {
    id: "6",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    tags: ["Historical Fiction", "Contemporary"],
    shelf: "best",
    cover_i: 9781804990926,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/242528917-lessons-in-chemistry?ref=nav_sb_ss_1_7",
  },
  {
    id: "7",
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    tags: ["Fantasy", "Young Adult"],
    shelf: "best",
    cover_i: 9781639730940,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/76703559-throne-of-glass?ref=nav_sb_ss_2_9",
  },

  // CURRENTLY READING SHELF
  {
    id: "8",
    title: "Red Rising",
    author: "Pierce Brown",
    tags: ["Sci-Fi", "Dystopian"],
    shelf: "currently-reading",
    cover_i: 9780345539786,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/15839976-red-rising?ref=nav_sb_ss_1_6",
  },
  {
    id: "9",
    title: "Carl’s Doomsday Scenario",
    author: "Matt Dinniman",
    tags: ["LitRPG", "Sci-Fi"],
    shelf: "currently-reading",
    cover_i: 9780593820261,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/56377548-carl-s-doomsday-scenario?ref=nav_sb_ss_1_9",
  },
  {
    id: "10",
    title: "Outlander",
    author: "Diana Gabaldon",
    tags: ["Historical Fiction", "Romance"],
    shelf: "currently-reading",
    cover_i: 9780440242949,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/10964.Outlander?ref=nav_sb_ss_1_8",
  },
  {
    id: "11",
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    tags: ["Fantasy", "Epic"],
    shelf: "currently-reading",
    cover_i: 9780765316882,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/68429.The_Well_of_Ascension?ref=nav_sb_ss_1_7",
  },
  {
    id: "12",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    tags: ["Classic", "Gothic"],
    shelf: "currently-reading",
    cover_i: 9780141439556,
    goodreadsUrl:
      "https://www.goodreads.com/book/show/6185.Wuthering_Heights?ref=nav_sb_ss_1_8",
  },
];
