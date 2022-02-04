import app from './app';
import '@babel/polyfill';

async function main() {


    const port = process.env.PORT || 3000;

    await app.listen(port);
    console.log('Server on port 3000');

}

main();