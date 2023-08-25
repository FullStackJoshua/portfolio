export function Form(props: any) {
  return <form>{props.children}</form>;
}

export function InputField(props: { fieldName: string; placeholder: string }) {
  return (
    <label className="pb-2">
      <p className="text-lg font-bold text-blue-950 pb-4">{props.fieldName}</p>
      <input
        className="p-5 w-full border border-solid rounded-2xl shadow-sm placeholder-gray-500"
        placeholder={props.placeholder}
        type="text"
      />
    </label>
  );
}

export function TextArea(props: { fieldName: string }) {
  return (
    <label>
      <p className="text-lg font-semibold text-blue-950 pb-5">
        {props.fieldName}
      </p>
      <textarea
        className="w-full h-40 p-5 border border-solid rounded-2xl shadow-sm"
        placeholder="Please type your message here..."
      />
    </label>
  );
}

export function SubmitButton(props: { text: string }) {
  return (
    <input
      type="button"
      value={props.text}
      className="w-full text-white font-semibold bg-blue-500 hover:bg-blue-700 hover:-translate-y-1.5 transition duration-300 py-4 px-6 rounded-md hover:cursor-pointer"
    />
  );
}
