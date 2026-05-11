function Square({value}) {
  return (
    <button className="text-2xl leading-3 m-4 p-6 border-2 border-gray-300 rounded-xl font-bold">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div>
        <Square value={1}></Square>
        <Square value={1}></Square>
        <Square value={1}></Square>
      </div>

      <div>
        <Square value={1}></Square>
        <Square value={1}></Square>
        <Square value={1}></Square>
      </div>

      <div>
        <Square value={1}></Square>
        <Square value={1}></Square>
        <Square value={1}></Square>
      </div>
    </>
  );
}
