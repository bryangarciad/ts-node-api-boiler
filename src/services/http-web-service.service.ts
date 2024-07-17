import { Report } from "../models/report.model";
import { data } from "../models/__tests__/hcp-response-test-data";

export class HcpApiWebService {
    private static readonly HOSTNAME: string;

    static async getReport(): Promise<Report> {
        // TODO: Update to use actual HTTP request and update return type to use AxiosResponse interface
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 500);
        });
    }
}
