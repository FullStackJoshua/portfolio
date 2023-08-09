export default function Button(props: { theme?: string; children: any }) {
  return props.theme === "outlined" ? (
    <button className="bg-white shadow border-2 border-gray-200 hover:bg-blue-500 hover:-translate-y-1.5 transition duration-300 py-4 px-6 rounded-md [&>p]:hover:text-white">
      <p className="text-gray-500 font-normal">{props.children}</p>
    </button>
  ) : (
    <button className="bg-blue-500 hover:bg-blue-700 hover:-translate-y-1.5 transition duration-300 py-4 px-6 rounded-md">
      <p className="text-white font-semibold">{props.children}</p>
    </button>
  );
}
