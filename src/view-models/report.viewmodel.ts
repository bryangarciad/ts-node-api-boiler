import { Request, Response } from "express";
import { HcpApiWebService } from "../services/http-web-service.service";

export class ReportViewModel {
    static async getReportDataAndMapModelToReportView(req: Request, res: Response) {
        const reportData = await HcpApiWebService.getReport();
        res.render("report", reportData);
    }
}
