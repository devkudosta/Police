import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    email: string;
    password: string;
    status: string;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
