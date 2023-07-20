export type categoryType = "asia" | "seeFood" | "mexicanFood";

export interface infoType {
  city: string;
  hausNr: number;
}

// das ist type von user
export interface userType {
  name: string;
  id: string;
  like: number;
  info: infoType;
  category: categoryType;
}

export interface userTypeWithPass extends userType {
  pass: string;
}
