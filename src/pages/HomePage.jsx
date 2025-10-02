import React from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import pkg from "../../package.json";

export const HomePage = () => {
  const articles = pkg.articles;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id}>
              <Link
                to={`/article/${article.id}`}
                className="group flex flex-col md:flex-row-reverse bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                {article.img && (
                  <div className="md:w-1/3">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="h-60 w-full object-cover md:h-full"
                    />
                  </div>
                )}

                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-violet-600 transition">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    {article.author ? article.author : "Anonim"} |{" "}
                    {article.date
                      ? new Date(article.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : new Date().toLocaleDateString("id-ID")}
                  </p>
                  <p className="text-gray-700 line-clamp-3">
                    {article.content}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
