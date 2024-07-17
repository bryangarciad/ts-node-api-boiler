import { Router } from "express";

export abstract class Route {
    readonly router = Router();

    constructor(protected readonly path: string) {}

    protected abstract configure(): void;
}
