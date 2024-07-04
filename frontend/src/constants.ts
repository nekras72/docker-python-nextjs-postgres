import { NewUser, UpdateUser } from "./types";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
export const BACKEND_NAME="flask"
export const INITIAL_NEW_USER_STATE: NewUser = { name: '', email: '' };
export const INITIAL_USER_TO_UPDATE_STATE: UpdateUser = { id: '', name: '', email: '' };