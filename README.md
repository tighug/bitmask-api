# Exhale User API

ヘルスケアマスクサービスのためのユーザー API

## Setup

環境変数ファイル`.env`をテンプレートから作成する。

```bash
cp .env.template .env
```

`.env`を編集する。

```txt
PORT=8000

DB_HOST=user-db
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

## License

[MIT](./LICENSE)
