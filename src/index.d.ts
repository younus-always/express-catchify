import { Request, Response, NextFunction, RequestHandler } from 'express';

declare function catchify(
      fn: (req: Request, res: Response, next: NextFunction) => any
): RequestHandler;

export = catchify;