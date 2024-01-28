import { ChangeEvent } from "react";
import { ICity, IUser } from "../models/response.interface";

const Select = ({
  items,
  onUserChange,
  label,
}: {
  items: ICity[] | IUser[];
  onUserChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}) => {
  const userChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onUserChange) {
      onUserChange(e);
    }
  };

  return (
    <select onChange={(e) => userChange(e)}>
      <option>{label}</option>
      {items.map((item: ICity | IUser) => {
        return (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
