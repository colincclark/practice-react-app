import { setupServer } from "msw/node";
import { handlers } from "tests/handlers/repositories";

const server = setupServer(...handlers);

export default server;
