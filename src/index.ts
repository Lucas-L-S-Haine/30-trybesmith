import app from './app';

const PORT = 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: \x1b[03;94m${PORT}\x1b[00m`,
));

export default server;
