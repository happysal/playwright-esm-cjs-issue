# Playwright example monorepo with ESM/CJS issues

This is an example monorepo (npm workspaces) for reproducing an issue in which, while trying to execute Playwright test suites, Node runtime (>=20) hangs during the startup process (**no errors, no output, Node process to 0%**, process must be killed manually). **The issue is NOT present while using Node < 20** (tested on Node 18 and Node 19).

The issue happens when Playwright tries to import an ESM module (named in this project `foobar-esm`), which imports a CJS module (named `foobar-cjs`). The CJS module simply exposes a function called `getRandomInt(max)`. While trying to execute the same modules inside a Node script, they work correctly; it seems the issue is present just while trying to execute a Playwright test suite.

**Playwright version: 1.44.1**
**Node version: 20.13.1 (any version >=20 experiences the issue)**

The project is divided into two parts:

 - Plain Javascript (`js` folder)
 - Typescript (`ts` folder)

## Module import flow chart (both in TS and JS folders)

 - `example` if the package with a main Node script
 - `playwright` is the packages with Playwright test suite
 - `foobar-esm` represents the ESM example module
 - `foobar-cjs` represents the CJS example module

```mermaid
graph LR
example -- imports --> foobar-esm
playwright -- imports --> foobar-esm -- imports --> foobar-cjs
```

## Executing the JS example

Go inside the js folder

    $ cd js

Install dependencies into the entire monorepo

    $ npm run install

Execute the plain Node script, just for realising the foobar-esm and foobar-cjs modules are imported/working correctly.

    $ npm run start

Try to execute the Playwright test suite, for obtaining the Node hanging issue

    $ npm run test

## Executing the ts example

Go inside the ts folder

    $ cd ts

Install dependencies into the entire monorepo

    $ npm run install

Build the entire monorepo

    $ npm run build

Execute the plain Node script, just for realising the foobar-esm and foobar-cjs modules are imported/working correctly.

    $ npm run start

Try to execute the Playwright test suite, for obtaining the Node hanging issue

    $ npm run test