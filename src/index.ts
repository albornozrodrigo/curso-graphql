import * as http from 'http';
import app from './app';
import { normalizePort, onError, onListening } from './utils/utils';

const server = http.createServer(app);
const port = normalizePort(process.env.port || 3003);

server.listen(port);

const addr = server.address();

server.on('error', onError(addr));
server.on('listening', onListening(addr));
