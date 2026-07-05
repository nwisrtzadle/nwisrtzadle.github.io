const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const essaysIndex = fs.readFileSync(path.join(root, 'essays/index.md'), 'utf8');

assert(
    !essaysIndex.includes('site.essays | first.url'),
    'essays router should not access `.url` directly on the `first` filter'
);
assert(
    essaysIndex.includes('{% assign first_essay = site.essays | first %}'),
    'essays router should assign the first essay before reading its URL'
);
assert(
    essaysIndex.includes("const firstEssayUrl = '{{ first_essay.url | relative_url }}';"),
    'essays router should render the assigned first essay URL'
);
