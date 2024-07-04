import { User } from "@/types";
import React from "react";

const CardComponent: React.FC<{ user: User }> = ({ user }) => {
    return (
    <div className="bg-white shadow-lg w-auto min-w-[170px] rouned-lg p-2 mb-2 hover:bg-gray-100">
        <div className="text-sm text-gray-600">ID: {user.id}</div>
        <div className="text-lg font-semibold text-gray-800">{user.name}</div>
        <div className="text-md text-gray-700">{user.email}</div>
    </div>
)}
export default CardComponent;