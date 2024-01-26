# Repo presents cdn issues using appDir with custom server

The issue appeared between 13.4.13 and 13.4.15 and exists in further versions.

Repo has three projects:

- appDir
- appDir with custom server
- pages dir

Everywhere works apart of appDir with custom server.
Some assets are loaded from cdn server but some loads from app server.

**Every asset should end connection with 404 code** but some assets in appdir with custom server loads with 200 code.

`pnpm -r run build`

`pnpm -r run start`
