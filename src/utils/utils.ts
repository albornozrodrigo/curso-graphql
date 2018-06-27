import { Server } from 'http';

export const normalizePort = (val: number | string): number | string | boolean => {
	let port: number = (typeof val === 'string') ? parseInt(val) : val;
	if(isNaN(port)) return val;
	else if (port >= 0) return port;
	else return false;
}

export const onError = (addr) => {
	return (error: NodeJS.ErrnoException): void => {
        if(error.syscall !== 'listen') throw error;
        let bind = (typeof addr.port === 'string') ? `pipe ${addr.port}` : `port ${addr.port}`;

		switch(error.code) {
			case 'EACCES':
				console.error(`${bind} requires elevated privileges`);
				process.exit(1);
			break;
			case 'EADDRINUSE':
				console.log(`${bind} is already in use`);
				process.exit(1);
			break;
			default:
				throw error;
		}
	}
}

export const onListening = (addr) => {
	return (): void => {
		let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
		console.log(`Listening at ${bind}`);
	}
}
