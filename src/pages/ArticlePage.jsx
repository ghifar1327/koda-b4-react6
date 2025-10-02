import React from "react";
import { useParams } from "react-router-dom";
import pkg from "../../package.json";
import { Navbar } from "../components/Navbar";

export const ArticlePage = () => {
  const { id } = useParams();
  const article = pkg.articles.find((a) => a.id === Number(id));

  if (!article) {
    return <h1>Artikel tidak ditemukan</h1>;
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <img src={article.img} alt={article.title} />
        <p>
          {article.author} | {new Date().toLocaleDateString()}
        </p>
        <p className="text-lg leading-relaxed">{article.content}</p>
      </main>
    </div>
  );
};
