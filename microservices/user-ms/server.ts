import cluster from 'cluster';
import os from 'os'
import App from './app';

App.loadServer()
// if (cluster.isPrimary) {
//   const numCPUs = os.availableParallelism()
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`worker ${worker.process.pid} died`);
//   });
// } else {
//   App.loadServer()
// }