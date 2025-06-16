import React, { useContext, useEffect } from "react";
import Bookcontext from "../Context/Bookcontext";
import BookCard from "../Components/Card";

const Book = () => {
  const { Book, getbooks } = useContext(Bookcontext);

  useEffect(() => {
    getbooks();
  }, []);

  const categorys = (Book) => {
    let tags = ["All Books", ...new Set(Book.map((book) => book.tag))];
    return tags;
  };

  const tag = categorys(Book);

  return (
    <div className="min-h-screen w-screen  bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="fixed overflow-y-scroll z-5 w-1/5 h-screen font-semibold bg-gray-800 text-gray-200 py-25 text-center">
        <div className="underline my-2 p-4">Categories</div>
        <ul className="category">
          {tag.map((tagu, index) => (
            <li key={index} className="py-2 hover:scale-105">
              <a href={`#${tagu === "All Books" ? "all" : tagu}`}>{tagu}</a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="px-10 w-4/5 right-0 absolute py-36 bg-gray-700 text-gray-200">
        {/* All Books Section */}
        <div id="all" className="underline my-2 p-4 text-3xl font-semibold">
          All Books
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {Book.length > 0 ? (
            Book.map((book) => <BookCard key={book._id} {...book} />)
          ) : (
            <h3 className="text-secondary my-4 required">
              No Book to display. Please add!
            </h3>
          )}
        </div>

        {/* Category-Specific Sections */}
        {tag.map(
          (tagu, index) =>
            tagu !== "All Books" && (
              <div key={index}>
                <div
                  id={tagu}
                  className="underline my-2 p-4 text-3xl font-semibold"
                >
                  {tagu}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {Book.filter((book) => book.tag === tagu).map((book) => (
                    <BookCard key={book._id} {...book} />
                  ))}
                </div>
              </div>
            )
        )}
      </main>
    </div>
  );
};

export default Book;
