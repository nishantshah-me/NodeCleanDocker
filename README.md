This is sample project to demonstrate the Dockerized clean architecture of node project.

# Docker steps
```bash
$docker build -t demo .
```

```bash
$docker run -it -d -p 9000:3000 -v $(pwd):/app demo 
```

# Reference
1. [youtube](https://www.youtube.com/watch?v=CsWoMpK3EtE&t=659s)
