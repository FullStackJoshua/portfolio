export default function Wrapper(props: any) {
  return (
    <div className="sm:container sm:mx-auto sm:max-w-screen-2xl 3xl:px-5 px-5">
      {props.children}
    </div>
  );
}
