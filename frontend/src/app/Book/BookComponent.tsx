// components/Book.tsx
"use client";
import React, { useState } from "react";
import "./BookComponent.css";

const Book: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="book-wrap">
      <input
        id="book-simple-open"
        type="checkbox"
        checked={isOpen}
        onChange={toggleOpen}
        style={{ display: "none" }} // チェックボックスを隠す
      />
      <div className={`book-simple ${isOpen ? "open" : ""}`}>
        <div className="book-inbox">
          <ul>
            <li>
              <a href="">テキストリンク</a>←リンクも使えます。
            </li>
            <li>この本はCSSで作成されています。</li>
            <li>カーソルがホバーしている間は開いたままです。</li>
          </ul>
        </div>
      </div>
      <button className="book-simple-switch" onClick={toggleOpen}>
        {isOpen ? "閉じる" : "開く"}
      </button>
    </div>
  );
};

export default Book;
