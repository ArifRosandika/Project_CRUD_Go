"use client";

import { useState } from "react";

interface FilmFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
}

export default function FilmForm({ initialData, onSubmit }: FilmFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [showtime, setShowtime] = useState(initialData?.showtime || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [picture, setPicture] = useState(initialData?.picture || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, showtime, description, picture };
    await onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Film Name"
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        value={showtime}
        onChange={(e) => setShowtime(e.target.value)}
        placeholder="Showtime"
        className="border p-2 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Paste URL gambar"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
        className="border p-2 rounded"
        required
      />

      {picture && (
        <img
          src={picture}
          alt="Preview"
          className="w-full h-64 object-cover rounded mt-2 border"
        />
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-3"
      >
        Save
      </button>
    </form>
  );
}
