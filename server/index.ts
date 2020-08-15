import dotenv from 'dotenv';
import server from './server';

dotenv.config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
