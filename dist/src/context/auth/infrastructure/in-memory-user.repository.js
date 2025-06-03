"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = new Map();
        this.seedData();
    }
    seedData() {
        const testUser = [
            {
                id: "1",
                email: "efajardo@email.com",
                password: "Inicios2022$$",
                name: "efajardo",
                createdAt: new Date()
            },
            {
                id: "2",
                email: "juan@email.com",
                password: "Inicios2022$$",
                name: "juan",
                createdAt: new Date()
            },
            {
                id: "2",
                email: "pepe@email.com",
                password: "Inicios2022$$",
                name: "pepe",
                createdAt: new Date()
            }
        ];
        testUser.forEach(element => {
            this.users.set(element.id, element);
        });
        // this.users.set(testUser.id, testUser);
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const user of this.users.values()) {
                if (user.email === email) {
                    return user;
                }
            }
            return null;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.get(id) || null;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users.set(user.id, user);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.users.has(user.id)) {
                this.users.set(user.id, user);
            }
            else {
                throw new Error("Usuario no encontrado");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.users.has(id)) {
                this.users.delete(id);
            }
            else {
                throw new Error("Usuario no encontrado");
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Array.from(this.users.values());
        });
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
