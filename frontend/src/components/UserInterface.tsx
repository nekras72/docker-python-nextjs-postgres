import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { ColorsSet, NewUser, UpdateUser, User } from "@/types";
import { BACKEND_NAME, BASE_URL, INITIAL_NEW_USER_STATE, INITIAL_USER_TO_UPDATE_STATE } from "@/constants";
import { createUser, getUsers, deleteUser, updateUser } from "@/utils/api";

const UserInterface: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState<NewUser>({ ...INITIAL_NEW_USER_STATE });
    const [userToUpdate, setUserToUpdate] = useState<UpdateUser>({ ...INITIAL_USER_TO_UPDATE_STATE });

    const backgroundColors: ColorsSet = {
        flask: 'bg-blue-500',
    };
    const buttonColors: ColorsSet = {
        flask: 'bg-blue-700 hover:bg-blue-600',
    };
    const bgColor = backgroundColors[BACKEND_NAME as keyof typeof backgroundColors] ?? 'bg-gray-200';
    const btnColor = buttonColors[BACKEND_NAME as keyof typeof buttonColors] ?? 'bg-blue-500 hover:bg-blue-600';

    // Create user
    const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUserData = await createUser(newUser);
        if (newUserData) {
            setUsers([newUserData, ...users]);
            setNewUser({ ...INITIAL_NEW_USER_STATE });
        }
    };

    // Update user
    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateUser(userToUpdate);
        setUserToUpdate({ ...INITIAL_USER_TO_UPDATE_STATE });
        setUsers(
            users.map((user) => {
                if (user.id === parseInt(userToUpdate.id)) {
                    return { ...user, name: userToUpdate.name, email: userToUpdate.email }
                } return user;
            })
        );
    }

    // Delete user
    const handleDeleteUser = async (userId: number) => {
        await deleteUser(userId);
        setUsers(users.filter((user) => user.id !== userId));
    }

    // fetch users
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            if (data) setUsers(data);
        };

        fetchData();

    }, [BACKEND_NAME, BASE_URL]);

    return (
        <div className={`user-interface ${bgColor} ${BACKEND_NAME} w-full max-w-xl p-4 my-4 rounded shadow`}>
            <img className="w-20 h-20 mb-6 mx-auto" src={`/${BACKEND_NAME}logo.svg`} alt={`${BACKEND_NAME} logo`} />
            <h2
                className="text-xl font-bold text-center text-white mb-6"
            >
                {`${BACKEND_NAME.charAt(0).toUpperCase() + BACKEND_NAME.slice(1)}`}
            </h2>

            {/* Create user */}
            <form onSubmit={handleCreateUser} className="mb-6 p-4 bg-blue-100 rounded shadow">
                <input
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="mb-2 w-full p-2 border border-gray-300 rounded"
                />
                <input
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="mb-2 w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Add User
                </button>
            </form>

            {/* Update user */}
            <form
                onSubmit={handleUpdateUser}
                className="mb-6 p-4 bg-blue-100 rounded shadow"
            >
                <input
                    placeholder="User ID"
                    value={userToUpdate.id}
                    onChange={(e) => setUserToUpdate({ ...userToUpdate, id: e.target.value })}
                    className="mb-2 w-full p-2 border border-gray-300 rounded"
                />
                <input
                    placeholder="name"
                    value={userToUpdate.name}
                    onChange={(e) => setUserToUpdate({ ...userToUpdate, name: e.target.value })}
                    className="mb-2 w-full p-2 border border-gray-300 rounded"
                />
                <input
                    placeholder="Email"
                    value={userToUpdate.email}
                    onChange={(e) => setUserToUpdate({ ...userToUpdate, email: e.target.value })}
                    className="mb-2 w-full p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
                >
                    Update User
                </button>
            </form>

            {/* Display users */}
            <div className="space-y-4">
                {users.map((user: User) => (
                    <div key={user.id} className="flex items-center justify-between bg-white p-4">
                        <CardComponent user={user} />
                        <button
                            onClick={() => handleDeleteUser(user.id)}
                            className={`${btnColor} text-white w-auto py-2 px-4 rounded`}
                        >
                            Delete User
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default UserInterface;