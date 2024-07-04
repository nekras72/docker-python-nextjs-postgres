
export type User = {
    id: number;
    name: string;
    email: string;
}

export type UpdateUser = Omit<User, 'id'> & { id: string};

export type NewUser = Omit<User, 'id'>;

export type UserInterfaceProps = {
    backendName: string;
}

export type ColorsSet = {
    [key: string]: string
}