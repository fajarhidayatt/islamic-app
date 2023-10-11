export default function InputSearch({ value, onChange, onClick }) {
  return (
    <form
      className="flex items-center justify-center gap-3 text-white relative max-w-xs mx-auto h-10"
      method="POST"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="absolute top-0 left-0 w-full h-full bg-dark-500 outline-none rounded-md py-1 pl-10  border-2 border-green-500/20 focus:border-green-500 "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-search absolute top-1/2 left-3 -translate-y-1/2"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <button
        type="button"
        onClick={onClick}
        className={`absolute top-1/2 right-3 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 grid place-items-center ${
          value ? 'block' : 'hidden'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </form>
  );
}
