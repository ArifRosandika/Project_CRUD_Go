import { getFilms } from "@/src/app/lib/api";
import FilmCard from "@/src/app/component/FilmCard";
import Navbar from "@/src/app/component/Navbar";

async function fetchFilmData() {
  const films = await getFilms();
  return films;
}

export default async function Home() {
  const films = await fetchFilmData();
  return (
    <div>
      <Navbar />
      <div className="bg-gray-300 p-6">
        {films.length === 0 ? (
          <p>No films found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            {films.map((film: any) => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
