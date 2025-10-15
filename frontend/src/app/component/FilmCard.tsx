"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiMoreVertical, FiEdit2, FiTrash2 } from "react-icons/fi";
import { handleDelete, handleUpdate } from "@/src/app/utils/action";
import { useRouter } from "next/navigation";

export default function FilmCard({ film }: any) {
  const router = useRouter();

  const handleDeleteClick = async (id: string) => {
    if (!confirm(`Are you sure you want to delete ${film.name}?`)) return;

    try {
      const res = await handleDelete(film.id);
      if (res.success) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (id: string) => {
    router.push(`/edit/${id}`);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden shadow-md bg-transparent w-[180px]">
      {/* Poster */}
      <div className="relative">
        <img
          src={film.picture}
          alt={film.name}
          className="w-full h-[280px] object-cover rounded-xl transition-transform duration-300 group-hover:"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40
            opacity-0 group-hover:opacity-100 
             transition-opacity duration-300 flex items-center justify-center p-3"
        >
          <p className="text-white text-xs text-center line-clamp-6">
            {film.description}
          </p>
        </div>
        <Menu as="div" className="absolute top-2 right-2">
          <MenuButton className="p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition bg-black/40 hover:bg-black/60">
            <FiMoreVertical size={16} />
          </MenuButton>

          <MenuItems
            anchor="bottom end"
            className="bg-black/80 rounded-md mt-2 py-1 w-28 flex flex-col gap-1 z-10 backdrop-blur-sm"
          >
            <MenuItem
              as="button"
              onClick={() => handleEditClick(film.id.toString())}
              className="flex items-center gap-2 text-white px-2 py-1 hover:bg-white/10 rounded-md transition"
            >
              <FiEdit2 size={14} /> Edit
            </MenuItem>
            <MenuItem
              as="button"
              onClick={() => handleDeleteClick(film.id.toString())}
              className="flex items-center gap-2 text-red-400 px-2 py-1 hover:bg-white/10 rounded-md transition"
            >
              <FiTrash2 size={14} /> Delete
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      <div className="mt-2 text-center text-2xl font-bold text-gray-800">
        {film.name}
      </div>

      <div className="mt-2 text-center text-sm font-italic text-gray-700">
        {film.showtime}
      </div>
    </div>
  );
}
