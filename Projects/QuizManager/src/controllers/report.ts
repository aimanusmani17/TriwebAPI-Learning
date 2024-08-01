import Report from "../models/report";
import ProjectError from "../helper/error";

import { Request, Response, NextFunction } from "express";

interface ReturnResponse {
  status: "success" | "error";
  message: String;
  data: {} | [];
}

const getReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let report;
    if (!!req.params.report) {
      const reportId = req.params.reportId;
      const report = await Report.findById(reportId);

      if( report){
        if (report.userId.toString() !== req.userId) {
            const err = new ProjectError("you are not allowed");
            err.statusCode = 405;
            throw err;
          }
      }
    } else {
      report = await Report.find({ userId: req.userId });
    }

    if (!report) {
      const err = new ProjectError("Report not found");
      err.statusCode = 404;
      throw err;
    }

    let resp: ReturnResponse = {
      status: "success",
      message: "Report",
      data: report,
    };

    res.send(report);
  } catch (error) {
    next(error);
  }
};

export { getReport };
