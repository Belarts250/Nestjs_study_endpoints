import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
export declare class EmployeesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createEmployeeDto: Prisma.EmployeeCreateInput): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
