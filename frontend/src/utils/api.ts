import { BACKEND_NAME, BASE_URL } from "@/constants";
import { NewUser, UpdateUser, User } from "@/types";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
    try {
            if (BASE_URL && BACKEND_NAME) {
                const response = await axiosInstance.get(`/api/${BACKEND_NAME}/users`);
                if (response.data) return response.data?.reverse();
            }
        } catch (error) {
                console.log(error);
        }
        return null;
};

export const createUser = async (newUser: NewUser) => {
        try {
            const response = await axiosInstance.post(`/api/${BACKEND_NAME}/users`, newUser);
            if (response.data) return response.data;
        } catch (error) {
            console.log('Error creating user:', error);
        }
    };

export const updateUser = async (userToUpdate: UpdateUser) => {
        try {
            const response = await axiosInstance.put(`/api/${BACKEND_NAME}/users/${userToUpdate.id}`, {
                name: userToUpdate.name,
                email: userToUpdate.email,
            });
            console.log(response);
            
        } catch (error) {
            console.log('Error updating user:', error);
        }
    };

export const deleteUser = async (userId: number) => {
        try {
            const response = await axiosInstance.delete(`/api/${BACKEND_NAME}/users/${userId}`);
            console.log(response);
        } catch (error) {
            console.log('Error updating user:', error);
        }
    };