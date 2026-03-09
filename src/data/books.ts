export interface Book {
    id: string;
    title: string;
    author: string;
    coverId?: string; 
    cover_i?: number;
    review?: string;
    tags?: string[];
    shelf: "best" | "currently-reading";
}

export const books: Book[] = [
  // BEST SHELF
  {
    id: "1",
    title: "Project Hail Mary",
    author: "Andy Weir",
    tags: ["Science Fiction", "Thriller"],
    shelf: "best",
  },
  {
    id: "2",
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    tags: ["Fantasy", "Romance"],
    shelf: "best",
  },
  {
    id: "3",
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    tags: ["Fantasy", "Epic"],
    shelf: "best",
  },
  {
    id: "4",
    title: "Piranesi",
    author: "Susanna Clarke",
    tags: ["Fantasy", "Literary"],
    shelf: "best",
  },
  {
    id: "5",
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    tags: ["LitRPG", "Sci-Fi", "Comedy"],
    shelf: "best",
  },
  {
    id: "6",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    tags: ["Historical Fiction", "Contemporary"],
    shelf: "best",
  },
  {
    id: "7",
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    tags: ["Fantasy", "Young Adult"],
    shelf: "best",
  },

  // CURRENTLY READING SHELF
  {
    id: "8",
    title: "Red Rising",
    author: "Pierce Brown",
    tags: ["Sci-Fi", "Dystopian"],
    shelf: "currently-reading",
  },
  {
    id: "9",
    title: "Carl’s Doomsday Scenario",
    author: "Matt Dinniman",
    tags: ["LitRPG", "Sci-Fi"],
    shelf: "currently-reading",
  },
  {
    id: "10",
    title: "Outlander",
    author: "Diana Gabaldon",
    tags: ["Historical Fiction", "Romance"],
    shelf: "currently-reading",
  },
  {
    id: "11",
    title: "The Well of Ascension",
    author: "Brandon Sanderson",
    tags: ["Fantasy", "Epic"],
    shelf: "currently-reading",
  },
  {
    id: "12",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    tags: ["Classic", "Gothic"],
    shelf: "currently-reading",
  },
];