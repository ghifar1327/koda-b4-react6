import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative"
    >
      <div className="bg-black/40 backdrop-blur-sm p-10 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-9xl font-extrabold tracking-widest text-lime-300 drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-bold mt-6 text-lime-100">
          Oops! Halaman tidak ditemukan
        </p>
        <p className="mt-4 text-lg text-gray-200">
          Sepertinya alamat URL yang kamu tuju salah atau halaman sudah tidak tersedia.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 rounded-lg bg-lime-400 text-green-900 font-semibold shadow-md hover:shadow-lg hover:bg-lime-300 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>

      <div className="absolute bottom-10 text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Medium Clone – All rights reserved.
      </div>
    </main>
  );
};
