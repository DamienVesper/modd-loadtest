<h1 align="center">Modd Loadtest</h1>

<h3 align="center">A loadtest for Modd.io games.</h3>
<br>

<div align="center">
    <img src="https://img.shields.io/github/v/release/DamienVesper/modd-loadtest?style=for-the-badge&color=3458eb">
    <img src="https://img.shields.io/github/contributors/DamienVesper/modd-loadtest?style=for-the-badge&color=3458eb">
    <img src="https://img.shields.io/github/languages/code-size/DamienVesper/modd-loadtest?style=for-the-badge&color=3458eb">
</div>

### Installing Dependencies
This project uses [Yarn](https://yarnpkg.com). It is advised not to mix package managers as this can result in inconsistent lockfiles across contributors.

To install dependencies for this project, open a command line interface at the directory of your project, and run:
```sh
yarn
```

This will create a `node_modules` directory in that of your project and add the packages there.

### Compiling the Project
This project utilizes [TypeScript](https://www.typescriptlang.org). It is a superset of JavaScript and as so, needs to be compiled to it before execution.

To build the project, run:
```sh
yarn build
```

This will create a `build` directory in that of your project and compile the project there.

### Running the Project
To execute the project, run:
```sh
yarn start
```

This will use the default configurations provided by the project. However, you can specify arguments to change some parameters of the program.
For example:
```sh
yarn start --ip 127.0.0.1 --ssl false --port 2001 --token abc --maxBots 50
```

Any or all of these arguments can be specified or excluded. Suit them to your own needs.

### Contributing
If you would like to contribute to this project, you may fork the repository and open a pull request.

### Licensing
This project is licensed under the terms of the GNU AGPLv3.
