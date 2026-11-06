import { useState } from "react";
import { Book, books, spineCloth, spineWidth } from "../../data/books";

export default function Books() {
  const current = books.filter((b) => b.shelf === "currently-reading");
  const recommended = books.filter((b) => b.shelf === "best");

  return (
    <div id="my-library-section" className="w-full px-6 sm:px-10 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-medium mb-4 text-ink tracking-tight">
            My Library
          </h1>
          <p className="text-mist">
            A living record of my current reads and all-time favs.
          </p>
        </header>

        <div className="border border-line bg-[#efe8dc] px-4 pt-8 sm:px-6">
          <Shelf title="Current reads" books={current} />
          <Shelf title="Recommendations" books={recommended} />
        </div>
      </div>
    </div>
  );
}

function Shelf({ title, books: shelfBooks }: { title: string; books: Book[] }) {
  const [activeId, setActiveId] = useState(shelfBooks[0]?.id ?? "");
  const active = shelfBooks.find((book) => book.id === activeId) ?? shelfBooks[0];

  return (
    <section className="mb-8">
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h2 className="font-display text-2xl text-ink shrink-0">{title}</h2>
        {active ? (
          <p className="min-w-0 text-sm text-mist truncate">
            <span className="text-ink">{active.title}</span>
            <span> · {active.author}</span>
          </p>
        ) : null}
      </div>

      <div
        className="shelf-row flex items-end gap-[3px] overflow-x-auto pt-3"
        onMouseLeave={() => setActiveId(shelfBooks[0]?.id ?? "")}
      >
        {shelfBooks.map((book) => (
          <Spine
            key={book.id}
            book={book}
            active={book.id === activeId}
            onActivate={() => setActiveId(book.id)}
          />
        ))}
      </div>
      <div className="-mx-4 sm:-mx-6 h-3.5 bg-gradient-to-b from-[#d9d0c3] via-[#cfc4b2] to-[#b7ad9e] shadow-[0_12px_16px_-10px_rgba(36,31,27,0.5)]" />
    </section>
  );
}

function Spine({
  book,
  active,
  onActivate,
}: {
  book: Book;
  active: boolean;
  onActivate: () => void;
}) {
  const cloth = spineCloth(book.id);

  return (
    <a
      href={book.goodreadsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${book.title}, ${book.author}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`group relative flex shrink-0 items-center justify-center self-end px-1 py-3 transition-transform duration-200 hover:-translate-y-2 focus-visible:-translate-y-2 ${
        active ? "-translate-y-1" : ""
      }`}
      style={{
        width: spineWidth(book.id),
        height: 196 + (Number(book.id) % 3) * 12,
        backgroundColor: cloth.bg,
        color: cloth.fg,
        boxShadow:
          "inset -3px 0 0 rgba(36,31,27,0.2), inset 2px 0 0 rgba(255,255,255,0.16)",
      }}
    >
      <span
        className="absolute left-1 right-1 top-3 h-[3px]"
        style={{ backgroundColor: cloth.band }}
      />
      <span className="spine-title font-display text-[15px] leading-none tracking-wide">
        {book.title}
      </span>
    </a>
  );
}
