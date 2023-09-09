import { useState } from "react";
import Button from "../Button";

interface details {
  imgSrc?: string;
  imgAlt?: string;
  description: string;
  more: string;
}

export function ReadMoreLess(props: any) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      <div>
        {props.description}
        {isShowMore && <div>{props.more}</div>}
      </div>

      <div className="border-solid border-black p-2">
        <Button onClick={toggleReadMoreLess}>
          {isShowMore ? "Read Less" : "Read More"}
        </Button>
      </div>
    </div>
  );
}
