import { Router } from "express";
import {StatusCodes} from "http-status-codes"

const router = Router();

router.get("/",(req,res)=>{
    console.log(req.body)
    return res.status(StatusCodes.OK).json("{}")
})



export {router}