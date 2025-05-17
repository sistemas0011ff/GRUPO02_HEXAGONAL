import { User } from "../domain/entity/user.aggregate";
import { IUserRepository } from "../domain/respositories/user.repository.interface";

export class InMemoryUserRepository implements IUserRepository{

    private users: Map<string, User> = new Map();

    constructor() {
        this.seedData();
    }

    private seedData(){
        const testUser : User = {
            id: "1",
            email: "efajardo@email.com",
            password: "Inicios2022$$",
            name: "efajardo",
            createdAt: new Date()
        };

        this.users.set(testUser.id, testUser);
    }


    async findByEmail(email: string): Promise<User | null> {
        for(const user of this.users.values()){
            if (user.email === email){
                return user;
            }    
        }
        return null;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.get(id) || null;
    }

    async save(user: User): Promise<void> {
        this.users.set(user.id, user);
    }

    async update(user: User): Promise<void> {
        if (this.users.has(user.id)){
            this.users.set(user.id, user);        
        }else{
            throw new Error("Usuario no encontrado");
        }
    }

    async delete(id: string): Promise<void> {
        if (this.users.has(id)){
            this.users.delete(id);        
        }else{
            throw new Error("Usuario no encontrado");
        }
    }
   
}