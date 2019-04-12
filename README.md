# Teravoz Dashboard

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Teravoz Dashboard created using [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/), [Apollo](https://www.apollographql.com/) and [Typescript](https://www.typescriptlang.org/).

# Instalation

> In order to run this project, It's required to configure the [Teravoz Client](https://github.com/LucasFrezarini/teravoz-dashboard) before launching the dashboard

The process for building the dashboard app is very similar to the backend configuration.

The easiest way to build this project is using [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/).The Docker environment provides a reverse proxy using a [NGINX](https://www.nginx.com/) container. This container allows you to make https requests on the local environment. By default, the proxy will run on port 4000. If you ever need to connect directly to the node container or, for some reason, you don't want to use https, you can access the server from port 4080.

If you are on a environment that supports Bash, you can simply install the dependencies and run the project using the `run.sh` provided on the root of the project. This shell script uses Docker and Docker Compose commands to provide the project's full ecosystem.

```bash
./run.sh install
./run.sh dev

# OR

sh run.sh install
sh run.sh dev
```

> Maybe you'll have to give the execution permission from the sh, with the command `chmod +x run.sh`

The `run.sh` script also gives to you an shortcut to execute commands inside the node container. For example, to install a new package on the project, you can simply run:

```bash
./run.sh yarn add <package name>
```

If you environment doesn't support bash, you should run the docker commands manually:

```bash
# Installing dependencies
docker run --rm -v $(pwd):/app -w /app -it node:10.15.3-alpine yarn

# Building and running the development containers
docker-compose up -d --build

```

# Project Structure

The Project has been created using [Create React App](https://facebook.github.io/create-react-app/) with the [Typescript](https://www.typescriptlang.org/) base template. [Bootstrap](https://getbootstrap.com/) is used as the CSS Framework, wrapped with [React Bootstrap](https://react-bootstrap.github.io/). It also uses [Apollo](https://www.apollographql.com/) and [React Apollo](https://github.com/apollographql/react-apollo), that provides an awesome way to integrate with GraphQL APIs.

The main objective of the project is to show a simple and realtime dashboard that display the actual ocurring calls. The best way to test it is to configure the backend and POST into the webhook endpoint to see the dashboard updating. The finished calls are cleared from the dashboard instantly.

# Code Structure and Formatting

The project make use of Prettier and [ESLint](https://eslint.org/), along with [Typescript](https://www.typescriptlang.org/), to format the application code. This is enforced by the use of [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), that fix the code formatting and errors from ESLint that can be automatically resolved on the moment of code commit. In the case of a error that cannot be fixed by the linters, the developer will be prevented from making the commit and should fix the problems manually.
