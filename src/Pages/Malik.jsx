import React, { useContext, useState } from "react";
import Bookcontext from "../Context/Bookcontext"
const Malik = () => {
  const [able, setable] = useState(false);
  const [key, setKey] = useState("");

  const { deleteBook, addBook } = useContext(Bookcontext);

  const [del, setdel] = useState("")
  const [create, setcreate] = useState({
    BookName : "" ,
    Author : "" ,
    image : "" ,
    tag : "" ,
    description: ""
  });
  
  const handledelete = (e) => {
    e.preventDefault()
      deleteBook(del)
    setdel("")

    
  }
  const handlecreate = async (e) => {
    e.preventDefault();

    const success = await addBook(
      create.BookName,
      create.Author,
      create.image,
      create.tag,
      create.description
    );

    if (success) {
      setcreate({
        BookName: "",
        Author: "",
        image: "",
        tag: "",
        description: "",
      });
    }
  };

  const onChange = (e) => {
    setcreate({ ...create, [e.target.name]: e.target.value });
  };




  return (
    <>
      <div
        className={`${
          !able ? "visible" : "hidden"
        } flex flex-col items-center justify-center min-h-screen bg-gray-600`}
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Book Management System
        </h1>
        <p className="text-lg mb-4">Manage your books efficiently</p>
        <p className="text-lg mb-4">
          Enter your passkey to start managing your books
        </p>

        <input
          type="password"
          placeholder="Enter Passkey"
          onChange={(e) => {
            setKey(e.target.value);
          }}
          autoFocus
          required
          value={key}
          className="p-2 border text-center border-gray-800 rounded mb-4 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (key === import.meta.env.VITE_PASS) {
              setable(true);
            } else {
              setKey("");
              alert("Wrong Passkey");
            }
          }}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Verify
        </button>
      </div>

      <div className={`${able ? "visible" : "hidden"}`}>
        <div className=" bg-gray-500  pt-30 pb-10">
          <div className="text-2xl font-bold text-center p-4">Create</div>
          <div className="text-center p-4">Create a new Book</div>
          <form
            method="post"
            onSubmit={handlecreate}
            className="flex  items-center p-4  justify-center gap-3"
          >
            <input
              type="text"
              onChange={onChange}
              required
              value={create.BookName}
              name="BookName"
              placeholder="Book Name"
              className="text-white  p-2 border border-gray-800 rounded"
            />
            <input
              type="text"
              onChange={onChange}
              required
              value={create.Author}
              name="Author"
              placeholder="Author"
              className="text-white  p-2 border border-gray-800 rounded"
            />
            <input
              type="text"
              onChange={onChange}
              required
              value={create.image}
              name="image"
              placeholder="Image URL"
              className="text-white  p-2 border border-gray-800 rounded"
            />
            <input
              type="text"
              onChange={onChange}
              required
              value={create.tag}
              name="tag"
              placeholder="Category"
              className="text-white p-2 border border-gray-800 rounded"
            />

            <textarea
              name="description"
              onChange={onChange}
              required
              value={create.description}
              id="about"
              placeholder="About the Book"
              className=" p-2 border border-gray-800 text-white rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded"
            >
              Create
            </button>
          </form>
        </div>

        <div className=" bg-gray-500 min-h-screen border-t-2 py-20">
          <div className="text-2xl font-bold text-center p-4">Delete</div>

          <div className="text-center">Delete a Book</div>
          <form
            onSubmit={handledelete}
            className="flex items-center p-4 justify-center gap-3"
            method="delete"
          >
            <input
              type="text"
              value={del}
              onChange={(e) => {
                setdel(e.target.value);
              }}
              name="BookName"
              placeholder="Book Name"
              className=" p-2 border text-white border-gray-800 rounded"
            />
            <button type="submit" className="bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Malik;
