import request from "supertest";
import express from "express";
import pollRoutes from "./poll.js";
import { describe, expect, it } from "@jest/globals";

const app = express();
app.use(express.json());
app.use("/api", pollRoutes);

describe("Poll Routes", () => {
  describe("GET /api/polls", () => {
    it("should return list of polls", async () => {
      const response = await request(app).get("/api/polls").expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0]).toHaveProperty("id");
      expect(response.body[0]).toHaveProperty("question");
    });

    it("should return polls with correct structure", async () => {
      const response = await request(app).get("/api/polls");

      response.body.forEach((poll) => {
        expect(poll).toHaveProperty("id");
        expect(poll).toHaveProperty("question");
        expect(typeof poll.id).toBe("string");
        expect(typeof poll.question).toBe("string");
      });
    });
  });
});
