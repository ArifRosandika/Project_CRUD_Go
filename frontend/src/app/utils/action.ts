"use server";

import { revalidatePath } from "next/cache";
import { deleteFilm, updateFilm, createFilm } from "../lib/api";

export async function handleDelete(id: string) {
  try {
    await deleteFilm(id);
    revalidatePath("/");
    return { succes: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to delete film" };
  }
}

export async function handleUpdate(id: string, data: any) {
  try {
    await updateFilm(id, data);
    revalidatePath("/");
    revalidatePath(`/edit/${id}`);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to update film" };
  }
}

export async function handleCreate(data: any) {
  try {
    await createFilm(data);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to create film" };
  }
}
