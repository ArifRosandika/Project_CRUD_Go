"use client";
import { useRouter } from "next/navigation";
import { createFilm } from "@/src/app/lib/api";
import FilmForm from "@/src/app/component/FilmForm";
import Navbar from "@/src/app/component/Navbar";

export default function AddFilmPage() {
  const router = useRouter();

  async function handleCreate(data: any) {
    await createFilm(data);
    router.push("/"); 
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add New Film</h1>
        <FilmForm onSubmit={handleCreate} />
      </div>
    </div>
  );
}
