const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = ['index.html', 'style.css', 'app.js', 'README.md', 'package.json'];
let failed = false;

files.forEach(f => {
  if (!fs.existsSync(path.join(root, f))) {
    console.error('Missing file:', f);
    failed = true;
  }
});

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (html.includes('emoji') || /[\u{1F600}-\u{1F64F}]/u.test(html)) {
  console.error('HTML contains emojis');
  failed = true;
}

if (failed) process.exit(1);
console.log('Portfolio smoke tests passed');
