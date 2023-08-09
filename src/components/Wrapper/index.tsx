export default function Wrapper(props: any) {
  return (
    <div className="sm:container sm:mx-auto sm:max-w-screen-xl 2xl:px-0 px-5">
      {props.children}
    </div>
  );
}
