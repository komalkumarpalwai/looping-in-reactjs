import MOCK_DATA from "../src/api/MOCK_DATA.json";

const App = () => {
  return (
    <>
      <h1 className="text-center text-8xl text-black">User List</h1>
      <ul className=" bg-black text-white h-auto w-64 ml-24">
        {MOCK_DATA.map(({ id, first_name, last_name, email, gender, movie_genres }) => (
          <li key={id}>
            <strong>{first_name} {last_name}</strong><br />
            Email: {email}<br />
            Gender: {gender}<br />
            Movie Genres: {Array.isArray(movie_genres) ? movie_genres.join(', ') : movie_genres}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
