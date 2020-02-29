const fs = require('fs');
const files = fs
  .readdirSync('./assets/artist_photos')
  .filter(x => x.includes('jpg'));
const ex =
  '{\n' +
  files.map(x => `"${x.split('.jpg')[0]}": require("./${x}"),`).join('\n') +
  '}';
const res = 'export default ' + ex;

console.log(res);
fs.writeFileSync('./assets/artist_photos/index.js', res);
