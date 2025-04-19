import { Router } from "express";
import {register}  from './health.route'

export function registerRoutes(router :Router): void {
    register(router)
}