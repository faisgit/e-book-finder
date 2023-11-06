import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import axios from "axios";
import BooksListContainer from "./components/books-list-container";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);

  const API_KEY = "AIzaSyCCdFJvwqYCY2z7jIVymfM8MOuL-YhcwKE";

  const fetchData = async (query) => {
    const encodedTerm = encodeURIComponent(query);
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodedTerm}&key=${API_KEY}`
    );
    setBooks(response.data.items);
  };

  return (
    <div>
      <Navbar />
      <Hero
        inputValue={inputValue}
        setInputValue={setInputValue}
        fetchData={fetchData}
      />
      <BooksListContainer books={books} />
      <Footer />
    </div>
  );
}
