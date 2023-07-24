import { rest } from "msw";
import {
  dataNoRepositories,
  dataOneRepository,
  dataRepository
} from "../mocks/repositories";

const handlers = [
  rest.get("https://registry.npmjs.org/-/v1/search", (req, res, ctx) => {
    const paramText = req.url.searchParams.get("text");

    if (paramText === "error") {
      return res(ctx.status(500));
    } else if (paramText === "zero") {
      return res(ctx.json(dataNoRepositories));
    } else {
      return res(ctx.json(dataOneRepository));
    }
  }),

  rest.get("https://registry.npmjs.org/test-repo", (req, res, ctx) => {
    return res(ctx.json(dataRepository));
  })
];

export { handlers };
