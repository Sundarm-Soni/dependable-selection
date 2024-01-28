import { IUser } from "../models/response.interface";

export const response: IUser[] = [
    {
        id: 1,
        name: "Amit Trivedi",
        username: "Am123",
        email: "",
        cities: [
            {id: 1, name: "Delhi"},
            {id: 2, name: "Mumbai"},
            {id: 3, name: "Kolkata"}
        ]
    },
    {
        id: 2,
        name: "Abhishek Purohit",
        username: "AB123",
        email: "",
        cities: [
            {id: 1, name: "Rajathan"},
            {id: 2, name: "Madhya Pradesh"},
            {id: 3, name: "Hyderabad"}
        ]
    }
];