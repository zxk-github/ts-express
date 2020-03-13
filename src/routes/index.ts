import express, { Request, Response } from 'express';
var router = express.Router();

router.get('/', function (req: Request, res: Response) {
    res.json({
        success: true,
        data: 'home'
    })
});

module.exports = router;
