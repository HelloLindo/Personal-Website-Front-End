# My Personal Website

A personal website project using `Vue.js` and `Webpack`.

> This is an fbi project. If you haven't installed [fbi](https://github.com/AlloyTeam/fbi) yet, use the following command to install.
>
> `$ npm i -g fbi` or `yarn global add fbi`

## Requirements

- `fbi v3.0+`
- `node v7.6+`

## Usage

**Show available tasks**

```bash
$ fbi ls
```

**Run a task**

```bash
$ fbi <task> [params]
```

**Update template**

```bash
$ fbi up vue
```

## Tasks

### `serve`

- Description: Compile and start development server.
- Params:
  - `port` `{Number}` Server starting port. If occupied, switch automatically.
- Alias: `s`
- Examples:
  - `fbi s -port=9999`

### `build`

- Description: Build the project for the specified environment.
- Params:
  - `p/prod` `{Boolean}` (default) Production environment.
  - `t/test` `{Boolean}` Test environment.
- Alias: `b`
- Examples:
  - `fbi b -t`
  - `fbi b -p`

## Docs

- [`fbi` Documentation](https://neikvon.gitbooks.io/fbi/content/)
