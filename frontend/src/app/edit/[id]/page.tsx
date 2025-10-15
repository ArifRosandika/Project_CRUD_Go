"use client";
import useSWR from "swr";
import FilmForm from "@/src/app/component/FilmForm";
import { use } from "react";
import { handleUpdate } from "../../utils/action";
import { useRouter } from "next/navigation";
import Navbar from "@/src/app/component/Navbar";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function EditFilmPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
  const { id } = use(params);

  const { data: film, error, isLoading, mutate } = useSWR(`http://localhost:8080/films/${id}`, fetcher);

    const handleUpdateClick = async ( data: any) => {
      try {
        const res = await handleUpdate(id, data);
        if (res.success) {
          router.push("/");
          mutate();
        }
      } catch (error) {
        console.log(error);
      }
    }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading film</div>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Film</h1>
        <FilmForm onSubmit={handleUpdateClick} initialData={film} />
      </div>
    </div>
  )
}
