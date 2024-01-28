export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    cities: ICity[];
  }
  export interface ICity {
    id: number;
    name: string;
  }