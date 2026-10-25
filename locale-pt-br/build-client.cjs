// Build client.js from dicts/<namespace>.json (pt-BR dictionaries, one file per namespace).
// Usage: node build-client.cjs
const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'dicts');
const outFile = path.join(__dirname, 'client.js');

const dicts = {};
for (const f of fs.readdirSync(dictsDir)) {
  if (!f.endsWith('.json')) continue;
  dicts[f.replace(/\.json$/, '')] = JSON.parse(fs.readFileSync(path.join(dictsDir, f), 'utf8'));
}

const body = `window.__ModuleLoader__.load({
  id: '@local/dsh-locale-pt-br',
  factory() {
    const DICTS = ${JSON.stringify(dicts, null, 2)};
    return {
      inject: ['locale'],
      apply(ctx) {
        ctx.effect(
          () => ctx.locale.addLanguage({ id: 'pt-BR', label: 'Português (Brasil)', fallback: 'en' }),
          'pt-br: language',
        );
        for (const ns of Object.keys(DICTS)) {
          ctx.effect(
            () => ctx.locale.register(ns, 'pt-BR', DICTS[ns]),
            'pt-br: dictionary ' + ns,
          );
        }
      },
    };
  },
});
`;
fs.writeFileSync(outFile, body, 'utf8');
console.log('WROTE', outFile, Object.keys(dicts).length, 'namespaces,', fs.statSync(outFile).size, 'bytes');
