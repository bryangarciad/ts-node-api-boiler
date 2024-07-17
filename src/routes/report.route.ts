import { Route } from "../common/route";
import { ReportViewModel } from "../view-models/report.viewmodel";

export class ReportRoute extends Route {
    private static readonly PATH = "/report";

    constructor() {
        super(ReportRoute.PATH);
        this.configure();
    }

    protected configure(): void {
        this.router.get(`${this.path}`, ReportViewModel.getReportDataAndMapModelToReportView);
    }
}
