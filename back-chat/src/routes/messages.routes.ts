
import { Router, Request, Response } from "express";
import * as MessageService from "../services/message.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const messages = MessageService.getAllMessages();
  res.json(messages);
});

router.post("/", (req: Request, res: Response) => {
    try{
  const { text, username } = req.body.message;
  console.log(req.body.message);
    MessageService.saveUserMessages(text, username);
    res.status(201).send(true);
    }catch(e){
        res.status(400).send(e);
    }
});

export default router;
