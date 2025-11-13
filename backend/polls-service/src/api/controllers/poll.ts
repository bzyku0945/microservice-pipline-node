import { pollService } from "../../services/poll.js";
import type { Request, Response } from "express";

export const pollController = {
  getAllPolls: async (req: Request, res: Response) => {
    try {
      const polls = await pollService.getAll();
      res.status(200).json(polls);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
