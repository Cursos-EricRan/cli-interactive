
const fs = require('fs');

const archivo = './db/data.json';

const saveDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data), { encoding: 'utf-8' });
}

const readDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    saveDB,
    readDB
}
