import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import data from "../data/articles.json";

function toSlug(str) {
  return String(str || "")
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(Boolean)
    .join("-");
}

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = (searchParams.get("search") || "").toLowerCase();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const filtered = data.articles.filter(
      ({ title, content, author }) =>
        title.toLowerCase().includes(searchQuery) ||
        content.toLowerCase().includes(searchQuery) ||
        author.toLowerCase().includes(searchQuery)
    );
    setArticles(filtered);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 px-4">
        {searchQuery && (
          <p className="mb-4 text-gray-600">
            Hasil pencarian untuk:{" "}
            <span className="font-semibold">{searchQuery}</span>
          </p>
        )}

        <div className="space-y-8">
          {articles.length > 0 ? (
            articles.map(({ id, author, slug, img, title, date, content }) => {
              const authorSlug = toSlug(author);
              const articleSlug = toSlug(slug);

              return (
                <div key={id}>
                  <Link
                    to={`/article/${authorSlug}/${articleSlug}`}
                    className="group flex flex-col md:flex-row-reverse bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                  >
                    {img && (
                      <div className="md:w-1/3">
                        <img
                          src={img}
                          alt={title}
                          className="h-60 w-full object-cover md:h-full"
                        />
                      </div>
                    )}
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-violet-600 transition">
                        {title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        {author || "Anonim"} |{" "}
                        {date
                          ? new Date(date).toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : new Date().toLocaleDateString("id-ID")}
                      </p>
                      <p className="text-gray-700 line-clamp-3">{content}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">Tidak ada artikel ditemukan.</p>
          )}
        </div>
      </div>
    </main>
  );
};
