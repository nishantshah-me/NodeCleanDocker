This is sample project to demonstrate the Dockerized clean architecture of node project.

## Docker steps
```bash
$docker build -t nish9900/demo .
```

```bash
$docker run -it -d -p 9000:3000 -v $(pwd):/app nish9900/demo 
```

## Docker compose 

```bash
$docker-compose up -d
```

```bash
$docker-compose down
```

## Log

Example :
``` javascript
        const logger = require("../util/logger")

        logger.dblog().fatal('message');

        logger.log().info('message');

```


# Reference
1. [youtube](https://www.youtube.com/watch?v=CsWoMpK3EtE&t=659s)
