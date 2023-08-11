export default () => {
  const start = Date.now();
  return () => `${Date.now() - start} ms`;
};
