// export interface IDogs {
//   message: string[];
//   status: boolean;
// }

export interface IDog {
  url: string;
  liked: boolean;
}

export interface IDogs {
  message: IDog[];
  status: boolean;
}
