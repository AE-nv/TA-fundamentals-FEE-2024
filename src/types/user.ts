import {Role} from '@/utils/roles';

export type User = {
    id?: string;
    roles?: Array<string>;
}

export type UserRole = {
    id: number;
    role: Role;
}
