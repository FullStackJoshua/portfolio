export function Title(props: any) {
  return (
    <h1 className="text-6xl font-bold text-gray-800 mb-8">{props.children}</h1>
  );
}

export function Header(props: any) {
  return <span className=" text-6xl tracking-{-2px}  ">{props.children}</span>;
}

export function SubTitle(props: any) {
  return (
    <h2 className="md:text-5xl text-3xl font-semibold text-gray-800 mb-4">
      {props.children}
    </h2>
  );
}

export function BodyText(props: any) {
  return (
    <p className="md:text-lg text-base font-normal text-gray-500">
      {props.children}
    </p>
  );
}
