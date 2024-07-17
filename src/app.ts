import "dotenv/config";
import { Application } from "./common/application";
import { ExceptionMiddleware } from "./ middleware/exception.middleware";
import { ReportRoute } from "./routes/report.route";
import { appSettings } from "./common/application.settings";

function bootstrap() {
    const exceptionMiddleware = new ExceptionMiddleware();

    const reportRoute = new ReportRoute();

    const routes = [reportRoute];

    const application = new Application(routes, exceptionMiddleware, appSettings);

    application.listen();
}

bootstrap();
