import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import { Book, books } from "../../data/books";

export default function Books() {
  const [myBooks, setMyBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const enrichedBooks = await Promise.all(
        books.map(async (localBook) => {
          const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(localBook.title)}&limit=1`;
          const res = await fetch(url);
          const data = await res.json();

          return {
            ...data.docs?.[0],
            ...localBook,
            title: localBook.title,
            author: localBook.author,
          };
        }),
      );

      setMyBooks(enrichedBooks);
      setLoading(false);
    };

    fetchBookDetails();
  }, []);

  const displayBooks = loading ? books : myBooks;

  return (
<div id="my-library-section" className="min-h-screen p-8 max-w-7xl mx-auto ...">      <header className="mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-[#f0c6a6f1]">
          My Library
        </h1>
        <p className="text-[#f0c6a6f1]">
          A living record of my current reads and all-time favs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Shelf
          title="Current Reads"
          books={displayBooks.filter((b) => b.shelf === "currently-reading")}
        />
        <Shelf
          title="My recommendations"
          books={displayBooks.filter((b) => b.shelf === "best")}
        />
      </div>
    </div>
  );
}

function Shelf({ title, books }: { title: string; books: Book[] }) {
  return (
    <section className="bg-[#3D342F]/40 p-6 rounded-2xl border border-[#221d1a]">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#f0c6a6f1]">
        {title}{" "}
        <span className="flex items-center justify-center w-6 h-6 text-sm bg-[#E07A5F]/20 text-[#D65F3D] rounded-full font-bold">
          {books.length}
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-7">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
function BookCard({ book }: { book: Book }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/fallback-book-cover.png";

  return (
    <motion.a
      href={book.goodreadsUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="w-40 block cursor-pointer group"
    >
      <div className="relative w-40 h-60 rounded-lg overflow-hidden bg-[#D9CAB3]">
        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width={165}
            height={350}
            animation="wave"
            className="absolute z-10"
            sx={{ bgcolor: "#C8B9A6" }}
          />
        )}
        <img
          src={imageUrl}
          alt={book.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <h3 className="text-sm mt-3 font-medium truncate text-[#f0c6a6f1] group-hover:underline">
        {book.title}
      </h3>
      <p className="text-xs text-[#8C7B75]">{book.author}</p>
    </motion.a>
  );
}
