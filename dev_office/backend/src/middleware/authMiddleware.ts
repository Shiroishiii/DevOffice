import { Request, Response, NextFunction } from "express";
import { verificarToken } from "../utils/token";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "missing token"
        });
    }

    try {
        const token = header.split(" ")[1];

        const payload = verificarToken(token);

        if (!payload) {
            return res.status(401).json({
                error: "invalid token"
            });
        }

        (req as any).user = payload;

        return next();

    } catch (error) {
        return res.status(401).json({
            error: "invalid or expired token"
        });
    }
}