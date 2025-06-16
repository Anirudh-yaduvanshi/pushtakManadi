import React, { useState, useEffect } from "react";
import Bookcontext from "./Bookcontext";

const Bookstate = (props) => {
  const host = "http://localhost:8080/api"; //backend ka host ya server api
  const [Book, setBook] = useState([]);
  const [user, setUser] = useState(null);

  // Get all books
  const getbooks = async () => {
    const response = await fetch(
      `${host}/books/home`, //backend ka route
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );

    const data = await response.json();
    if (response.ok) {
      setBook(data);
    } else {
      console.error("Error fetching books:", response.statusText);
    }
  };

  // Add a book
  const addBook = async (BookName, Author, image, tag, description) => {
    try {
      const response = await fetch(`${host}/books/addbook`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
          title: BookName,
          author: Author,
          image: image,
          tag: tag,
          description: description,
        }),
      });

      const newBook = await response.json();
      if (response.ok) {
        setBook([...Book, newBook]);
        return true;
      } else {
        console.error("Error adding book:", newBook.error || newBook);
      }
    } catch (error) {
      console.error("Error adding book:", error);
      return false;
    }
  };

  // Delete a book
  // const deleteBook = async (title) => {
  //   const response = await  fetch(`${host}/books/${title}}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("auth-token"),
  //     },
  //   });
  //   const json = await response.json();
  //   if (!response.ok) throw json;
  //   setBook(Book.filter((book) => book.tittle !== tittle));
  // };

  const deleteBook = async (title) => {
    try {
      const response = await fetch(
        `${host}/books/${encodeURIComponent(title)}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      const json = await response.json();
      console.log(json, response);

      if (!response.ok) throw json;

      // Update state after deletion
      setBook((prevBooks) => prevBooks.filter((book) => book.title !== title));
      console.log("Removed book:", title);
    } catch (error) {
      console.error("Error deleting book:", error);
      alert(error.message || "Failed to delete book");
    }
  };


  const fetchUserData = async () => {
    try {
      const response = await fetch(`${host}/auth/profile`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      if (data.message) {
        console.log("first err");
      } else {
        setUser(data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // **Login Function**
  const login = async (email, password) => {
    try {
      const response = await fetch(`${host}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("auth-token", data.token);
        setUser(data.user);
        return true;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // **Register Function**
  const register = async (username, email, password) => {
    try {
      const response = await fetch(`${host}/auth/register`, {
        // const response = await fetch(`${host}/auth/register`, {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      console.log(username, password, email);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("auth-token", data.token);
        setUser(data.user);
        return true;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };

  useEffect(() => {
    getbooks(); // Fetch books when component mounts
  }, []);
  return (
    <Bookcontext.Provider
      value={{
        user,
        Book,
        getbooks,
        deleteBook,
        fetchUserData,
        addBook,
        register,
        login,
      }}
    >
      {props.children}
    </Bookcontext.Provider>
  );
};

export default Bookstate;

// // Edit a book

// const editBook = async (id, title, description, tag) => {
//   const response = await fetch(`${host}/api/book/updatebook/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "auth-token": localStorage.getItem("auth-token"),
//     },
//     body: JSON.stringify({ title, description, tag }),
//   });
//   const updatedBook = await response.json();
//   setBook(Book.map((book) => (book._id === id ? updatedBook : book)));
// };
