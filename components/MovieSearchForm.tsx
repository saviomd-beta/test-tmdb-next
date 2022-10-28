export default function MovieSearchForm() {
  return (
    <form className="mb-4" method="get" action="/">
      <input className="border p-2" name="name" required type="text" />
      <button className="bg-slate-300 border p-2 rounded" type="submit">
        Search
      </button>
    </form>
  );
}
