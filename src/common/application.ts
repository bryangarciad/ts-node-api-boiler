import { Route } from "./route";
import express from "express";
import { createServer } from "http";
import { ExceptionMiddleware } from "../ middleware/exception.middleware";

export class Application {
    private static readonly DEFAULT_PORT = "8080";

    private static readonly ROOT_PATH = "/";

    private static readonly STATIC_FOLDERS = ["dist/public"];

    private readonly port: number;

    private readonly expressApplication = express();
    private readonly server = createServer(this.expressApplication);

    constructor(routes: Route[], exceptionMiddleware: ExceptionMiddleware, appSettings: object) {
        this.port = this.evaluatePort();
        this.configureStaticFolders();
        this.configureMiddleware();
        this.setEjsViewEngine();
        this.setApplicationSettings(appSettings);
        this.configureRoutes(routes);
        this.initializeErrorHandling(exceptionMiddleware);
    }

    private configureStaticFolders(): void {
        for (const folder of Application.STATIC_FOLDERS) {
            this.expressApplication.use(Application.ROOT_PATH, express.static(folder));
        }
    }

    private evaluatePort(): number {
        return parseInt(process.env.SERVER_PORT || Application.DEFAULT_PORT);
    }

    private setEjsViewEngine(): void {
        this.expressApplication.set("view engine", "ejs");
        this.expressApplication.set("views", "src/views");
    }

    private setApplicationSettings(appSettings: object): void {
        this.expressApplication.locals = appSettings;
    }

    private configureMiddleware(): void {
        this.expressApplication.use(express.json());
    }

    private initializeErrorHandling(exceptionMiddleware: ExceptionMiddleware): void {
        this.expressApplication.use(exceptionMiddleware.handleExceptions());
    }

    private configureRoutes(routes: Route[]): void {
        for (const route of routes) {
            this.expressApplication.use(Application.ROOT_PATH, route.router);
        }
    }

    async listen(): Promise<void> {
        const serverPromise = new Promise<void>((resolve) => {
            this.server.listen(this.port, () => {
                console.info(`Application listening at port ${this.port}`);
                resolve();
            });
        });

        await serverPromise;
    }
}
