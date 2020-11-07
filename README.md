# Bitmask API

ヘルスケアマスクサービス Bitmask のための API サーバー

## Setup

環境変数ファイル`.env`をテンプレートから作成する。

```bash
cp .env.template .env
```

`.env`を編集する。

```txt
PORT=8000

DB_HOST=db
DB_PORT=3306
DB_USERNAME=test
DB_PASSWORD=test
DB_ROOT_PASSWORD=root
DB_NAME=test
```

## Usage

```bash
# For development
yarn dev

# For production
yarn start

# For only build
yarn build
```

### With Docker

```bash
docker-compose up -d
```

## API

Server：`http://3.114.89.143/api`

### GET `/users`

すべてのユーザーを取得する。

Response

```json
{
  "userCount": 2,
  "users": [
    {
      "id": 1,
      "createdAt": "2020-11-01-13-30-49",
      "updatedAt": "2020-11-01-13-30-49",
      "name": "Alice",
      "password": "alice123"
    },
    {
      "id": 2,
      "createdAt": "2020-11-06-13-07-50",
      "updatedAt": "2020-11-06-13-07-50",
      "name": "Bob",
      "password": "bob456"
    }
  ]
}
```

### GET `/users/{id}`

`id`に一致するユーザーを取得する。

Parameters

- `id` : ユーザー ID（number）

Response

```json
{
  "user": {
    "id": 1,
    "name": "Alice",
    "password": "alice123",
    "createdAt": "2020-11-01-13-30-49",
    "updatedAt": "2020-11-01-13-30-49"
  }
}
```

### POST `/users`

新規にユーザーを登録する。
（`name`の重複は不可）

Body

```json
{
  "name": "Alice", // at least 3 character long
  "password": "alice123" // at least 3 character long
}
```

Response

```json
{
  "user": {
    "id": 1,
    "name": "Alice",
    "password": "alice123",
    "createdAt": "2020-11-01-13-30-49",
    "updatedAt": "2020-11-01-13-30-49"
  }
}
```

### DELETE `/users/{id}`

`id`に一致するユーザーを削除する。

Parameters

- `id` : ユーザー ID（number）

Response

```json
{
  "user": {
    "id": 1,
    "name": "Alice",
    "password": "alice123",
    "createdAt": "2020-11-01-13-30-49",
    "updatedAt": "2020-11-01-13-30-49"
  }
}
```

### GET `/device-datas`

センサーデバイスのデータを取得する。

Queries

- `deviceName` : センサーデバイスの名前
- `from` : データ取得日時の範囲の始まり。省略可。（Date)
  - e.g. `2020-11-03-13-30-00`
- `to` : データ取得日時の範囲の終わり。省略可。（Date)
  - e.g. `2020-11-03-13-30-30`
  - 取得するデータは`from`以上`to`未満の範囲

Response

```json
{
  "deviceDataCount": 4,
  "deviceDatas": [
    {
      "id": 1,
      "createdAt": "2020-11-06-13-12-27",
      "deviceName": "device-A",
      "temperature": 36,
      "humidity": 50.2,
      "pressure": 1020,
      "gas": 12.3
    },
    {
      "id": 2,
      "createdAt": "2020-11-06-13-12-29",
      "deviceName": "device-A",
      "temperature": 36,
      "humidity": 50.2,
      "pressure": 1020,
      "gas": 12.3
    }
  ]
}
```

### POST `/device-datas`

センサーデバイスのデータを保存する。

Body

```json
{
  "deviceName": "device-A",
  "temperature": 36.0,
  "humidity": 50.2,
  "pressure": 1020,
  "gas": 12.3
}
```

Response

```json
{
  "deviceData": {
    "id": 1,
    "createdAt": "2020-11-06-13-12-27",
    "deviceName": "device-A",
    "temperature": 36,
    "humidity": 50.2,
    "pressure": 1020,
    "gas": 12.3
  }
}
```

## License

[MIT](./LICENSE)
