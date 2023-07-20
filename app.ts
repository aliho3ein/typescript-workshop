import { categoryType, infoType, userType } from "./models/types";

const getData = async (name: string | number) => {
  console.log("hello " + name);

  // const data : userType = await fetch

  // return data
};

const lastName: string | number = "max";

let info: infoType = { city: "adresse", hausNr: 25 };

let category: categoryType = "asia";

const sendData = (data: string = "hey") => {
  // fetch("hfkjd" , {});
};

getData(lastName);
