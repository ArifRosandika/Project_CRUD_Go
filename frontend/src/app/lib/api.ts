export const API_URL = "http://localhost:8080";

export async function getFilms() {
  const res = await fetch(`${API_URL}/films`);
  return res.json();
}

export async function getFilmById(id: string) {
  const res = await fetch(`${API_URL}/films/${id}`);
  return res.json();
}

export async function createFilm(data: any) {
  await fetch(`${API_URL}/films/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateFilm(id: string, data: any) {
  await fetch(`${API_URL}/films/edit/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteFilm(id: string) {
  await fetch(`${API_URL}/films/delete/${id}`, { method: "DELETE" });
}
