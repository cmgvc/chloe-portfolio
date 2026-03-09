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
          return { ...localBook, ...data.docs?.[0] };
        })
      );

      setMyBooks(enrichedBooks);
      setLoading(false);
    };

    fetchBookDetails();
  }, []);

  const displayBooks = loading ? books : myBooks;

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-12">
      <h1 className="text-4xl font-bold">The Library</h1>

      <Shelf
        title="Currently Reading"
        books={displayBooks.filter((b) => b.shelf === "currently-reading")}
      />

      <Shelf
        title="All-Time Favorites"
        books={displayBooks.filter((b) => b.shelf === "best")}
      />
    </div>
  );
}

function Shelf({ title, books }: { title: string; books: Book[] }) {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-2xl font-semibold mb-6 border-l-4 border-[#e4cebe] pl-4">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar">
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
    <motion.div whileHover={{ scale: 1.05 }} className="w-40">
      <div className="relative w-40 h-60 rounded-lg overflow-hidden bg-gray-800">

        {!imageLoaded && (
          <Skeleton
            variant="rectangular"
            width={165} height={350}
            animation="wave"
            className="absolute z-10"
            sx={{ bgcolor: "grey.700" }}
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

      <h3 className="text-sm mt-3 font-medium truncate">{book.title}</h3>
      <p className="text-xs text-gray-500">{book.author}</p>
    </motion.div>
  );
}