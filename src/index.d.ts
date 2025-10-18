import { Request, Response, NextFunction, RequestHandler } from 'express';

declare function catchify(
      fn: (req: Request, res: Response, next: NextFunction) => unknown | Promise<>
): RequestHandler;

exports.default = catchify;