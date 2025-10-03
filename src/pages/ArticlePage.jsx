import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/articles.json";
import { Navbar } from "../components/Navbar";

function toSlug(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(Boolean)
    .join("-");
}

export const ArticlePage = () => {
  const { author, slug, id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let foundArticle = null;

    if (id) {
      foundArticle = data.articles.find(({ id: artId }) => artId === Number(id));
    }

    if (!foundArticle && author && slug) {
      foundArticle = data.articles.find(
        ({ author: artAuthor, slug: artSlug }) =>
          toSlug(artAuthor) === author && toSlug(artSlug) === slug
      );
    }

    if (!foundArticle && slug) {
      foundArticle = data.articles.find(
        ({ slug: artSlug }) => toSlug(artSlug) === slug
      );
    }

    setArticle(foundArticle || null);
  }, [id, author, slug]);

  if (!article) {
    return (
      <div>
        <Navbar />
        <main className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <p className="mb-4 text-gray-600">
            Kemungkinan URL tidak sesuai atau artikel telah diubah/dihapus.
          </p>
          <Link to="/" className="text-blue-600 underline">
            Kembali ke beranda
          </Link>
        </main>
      </div>
    );
  }

  const { title, img, author: artAuthor, date, content } = article;

  return (
    <div>
      <Navbar />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {img && (
          <img
            src={img}
            alt={title}
            className="mb-4 w-full object-cover"
          />
        )}
        <p className="text-sm text-gray-500 mb-4">
          {artAuthor} |{" "}
          {date
            ? new Date(date).toLocaleDateString("id-ID")
            : new Date().toLocaleDateString("id-ID")}
        </p>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </main>
    </div>
  );
};
