import { Spinner, IStartOptions } from "@topcli/spinner";

export default (message: string, options?: IStartOptions) => {
  return new Spinner().start(message, options);
};
