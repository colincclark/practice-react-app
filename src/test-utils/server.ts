import { setupServer } from "msw/node";
import { handlers } from "test-utils/handlers/repositories";

const server = setupServer(...handlers);

export default server;
