import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';

var indexRouter = require('./routes/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function (_req, _res, next) {
    next(createError(404));
});

app.use(function (error: any, _req: Request, res: Response, _next: NextFunction) {
    res.status(error.status || 500);
    res.json({
        success: false,
        error
    });
});

export default app;
