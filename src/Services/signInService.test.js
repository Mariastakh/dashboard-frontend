import mockAxios from "axios";
import { signInService } from "./signInService";

jest.mock("axios");

describe("signInService", () => {
  it("Receives confirmation when sending sign in details", async () => {
    mockAxios.post.mockImplementationOnce(() => Promise.resolve());

    await signInService("maria", "123", "maria@me");

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.post).toHaveBeenCalledWith(
      "http://localhost:8000/signup",
      {
        username: "maria",
        password: "123",
        email: "maria@me",
      },
      { withCredentials: true }
    );
  });
});
