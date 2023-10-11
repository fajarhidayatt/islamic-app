export default function NumberVerse({ number, onClick }) {
  return (
    <a href={`#${number}`} key={number} onClick={onClick}>
      <div className="bg-dark-400 text-white p-2 rounded-md hover:bg-gradient-to-br from-green-300 to-green-500 mb-3">
        <h2 className="font-semibold">{`Ayat ${number}`}</h2>
      </div>
    </a>
  );
}
