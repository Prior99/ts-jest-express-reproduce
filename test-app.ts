import * as request from "supertest";
import { app } from "./app";

test("The app", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Some text.");
});
