export default function List(props: any) {
  return (
    <li className="flex items-center gap-2 ">
      <div className="w-7 h-7 bg-blue-200 rounded-full " />
      <p>{props.children}</p>
    </li>
  );
}
