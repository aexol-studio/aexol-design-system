# Galactica design system

## Running sandbox

```sh
npm run start
```

## Creating new Component

Install plop CLI 

```sh
npm i -g plop
```

Create component

```sh
plop component
```

plop will create 3 files:

`./src/components/ComponentName.tsx`

`./src/components/styles/ComponentName.tsx`

`./docs/components/ComponentName.mdx`

## Commiting changes to the repository

Install `git cz`

```sh
npm install -g commitizen
```

Now add changes you made to project branch
```sh
git add .
```

and commit them with commitizen

```sh
git cz
```

Provide name and short description at least or commit won't be accepted. Then you can push the changes

## Building production build


In case you don't have grunt installed

```sh
npm i -g grunt-cli
```

then

```
npm run build
```


