import { Request, Response, NextFunction } from "express";
import { SUCCESS } from "../constants/status-codes.constants";

export const registerUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(SUCCESS).send("server is working");
};
