# Vehicle API

A simple API that reads from a database table and returns all the rows in JSON format.

## Install
### Clone

```shell
git clone https://github.com/sherwingp/vehicle-api
cd vehicle-api
npm install
```

### Setup database
Install [PostgreSQL](https://www.postgresql.org/)

Add .env and store postgres credentials:
```shell
touch .env
echo 'DB_USERNAME=YOUR_PG_USERNAME' >> .env
echo 'DB_PASSWORD=YOUR_PG_PASSWORD' >> .env
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

### Start server
```shell
npm start
```

## API
### Get all vehicles
#### Request

`GET /api/vehicles`

```
curl -i -H 'Accept: application/json' http://localhost:3000/api/vehicles/
```


#### Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 375
```

```
{"vehicles":[{"id":1,"make":"YAMAHA","model":"VMX1700 V-MAX","createdAt":"2022-05-12T18:37:08.406Z","updatedAt":"2022-05-12T18:37:08.406Z"},{"id":2,"make":"UD","model":"1800","createdAt":"2022-05-12T18:37:08.406Z","updatedAt":"2022-05-12T18:37:08.406Z"},{"id":3,"make":"BMW","model":"HP2 Sport","createdAt":"2022-05-12T18:37:08.406Z","updatedAt":"2022-05-12T18:37:08.406Z"}]}
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


