# Blog App

## Description

It's a blog app that uses react and nodejs with microservices express docker kubernetesand tools skaffold to build and push docker image easy.

## How to Install and Run the Project

First we need to go each microservice folder and run:

```bash
npm install
```

After that we need to enable kubernetes

- Open docker app
- Click Settings
- Choose kubernetes
- And enable kubernetes

If our kubernetes are enabled make sure to install [kubectl CLI](https://kubernetes.io/docs/tasks/tools/).

Also we need to install [skaffold](https://skaffold.dev/docs/install/) if you have not chocolatey installed in your pc you can install it from here [chocolatey doc](https://chocolatey.org/install)

If everything is OK open project file directory and run:

```bash
skaffold dev
```
