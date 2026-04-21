const fs = require('fs');
let data = fs.readFileSync('app/page.tsx', 'utf8');
data = data.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
fs.writeFileSync('app/page.tsx', data);
console.log('Fixed HTML comments in page.tsx');