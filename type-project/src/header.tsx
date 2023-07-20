import { FC, useRef, useState } from "react";
import { headerType } from "./model/interface";

const Header: FC<headerType> = ({ title, num }) => {
  const [state, setState] = useState<number>(0);

  const divRef = useRef<HTMLInputElement>(null);

  const getData = (event: any) => {
    console.log(divRef.current?.className);
  };

  return (
    <>
      <div className="testClass" onClick={getData}>
        {title} , {num! + 1}
      </div>
      <input ref={divRef} type="text" />
    </>
  );
};

export default Header;
