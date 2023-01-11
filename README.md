# Couchbase + Express Experiment

Simple experiment application that shows how Couchbase can be used in an express application

## How to run

First, run the database:

```shell
docker run -d --name db -p 8091-8097:8091-8097 -p 9123:9123 -p 11207:11207 -p 11210:11210 -p 11280:11280 -p 18091-18097:18091-18097 couchbase
```

Then, run the server:

```shell
yarn install
yarn start
```