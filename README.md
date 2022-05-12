# Vehicle API

A simple API that reads from a database table and returns all the rows in JSON format.

## Install

```shell
git clone https://github.com/sherwingp/vehicle-api
cd vehicle-api
npm install
```

## Setup database
Install [PostgreSQL](https://www.postgresql.org/)

Add .env and store postgres credentials:
```shell
touch .env
echo 'DB_USERNAME=YOUR_PG_USERNAME' >> .env
echo 'DB_USERNAME=YOUR_PG_PASSWORD' >> .env
```

Create database:
```shell
npx sequelize-cli db:create
```

Create vehicles table:
```shell
npx sequelize-cli db:migrate
```

Seed database:
```shell
npx sequelize-cli db:seed:all
```
## Tables

### vehicles
- `id`: primary key, sequential integer
- `make`: string
- `model`: string
- `createdAt`: datetime (TIMESTAMP WITH TIME ZONE for postgres)
- `updatedAt`: datetime (TIMESTAMP WITH TIME ZONE for postgres)

## Project structure
- /models - Database layer
- /controllers - Handler layer
- /routes - Network layer

## Testing

#### To run the tests

```bash
npm test
```


