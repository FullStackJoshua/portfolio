import Image from "next/image";
interface details {
  imgSrc?: string;
  imgAlt?: string;
  title?: string;
  description?: string;
}

export default function List(props: any) {
  return (
    <div>
      <li className="flex text-black items-center gap-3">
        <Image src={props.imgSrc} width={30} height={30} alt={props.imgAlt} />
        {props.description}
      </li>
    </div>
  );
}
