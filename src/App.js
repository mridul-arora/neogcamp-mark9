import "./styles.css";
import React, { useState } from "react";

const bookRecList = {
  fiction: [
    {
      name: "Men Without Women",
      desc:
        "Across seven tales, Haruki Murakami brings his powers of observation to bear on the lives of men who, in their own ways, find themselves alone.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "All The Bright Places",
      desc:
        "When Finch and Violet meet on the ledge of the bell tower at school, it’s unclear who saves whom",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Eleanor & Park",
      desc:
        "Set over one school year in 1986, Eleanor & Park is the story of two star-crossed misfits – smart enough to know first love almost never lasts, but brave and desperate enough to try.",
      rating: "⭐⭐⭐"
    }
  ],

  systems: [
    {
      name: "The Psychology of Money",
      desc:
        "Doing well with money isn't necessarily about what you know. It's about how you behave. ",
      rating: "⭐⭐⭐"
    },
    {
      name: "Atomic Habits",
      desc: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "The Compound Effect",
      desc:
        "his easy-to-use, step-by-step operating system allows you to multiply your success, chart your progress, and achieve any desire.",
      rating: "⭐⭐⭐⭐⭐"
    }
  ],
  power: [
    {
      name: "Mindset",
      desc:
        "People with a fixed mindset — those who believe that abilities are fixed — are less likely to flourish than those with a growth mindset — those who believe that abilities can be developed.",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Can't Hurt Me",
      desc:
        "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights..",
      rating: "⭐⭐"
    },
    {
      name: "The 48 Laws of Power",
      desc:
        "Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”)",
      rating: "⭐⭐⭐⭐"
    }
  ]
};

export default function App() {
  const [activeGenre, setGenre] = useState("systems");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>📚goodreads</h1>
      <h5>Checkout my favourite books. Select a genre to get started. </h5>

      {Object.keys(bookRecList).map((genre) => (
        <button
          key={genre}
          onClick={() => clickHandler(genre)}
          style={{
            padding: "0.3rem 0.6rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            margin: "0rem 0.5rem"
          }}
        >
          {genre}
        </button>
      ))}

      <hr style={{ width: "70%" }} />

      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyleType: "none" }}>
          {bookRecList[activeGenre].map((book) => (
            <li
              key={book.name}
              style={{
                height: "10%",
                borderRadius: "0.5rem",
                border: "1px solid black",
                padding: "0.5rem",
                width: "70%",
                margin: "0.5rem auto"
              }}
            >
              <div style={{ display: "block" }}>
                <h3 style={{ float: "left", margin: "0.2rem 0" }}>
                  {book.name}
                </h3>
                <p style={{ float: "right", margin: "0.2rem 0" }}>
                  {book.rating}
                </p>
              </div>
              <br />
              <p style={{ margin: "1rem 0" }}>{book.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
