This is sample project to demonstrate the Dockerized clean architecture of node project.

# Docker steps
1. docker build -t node-docker-tutorial .
> . means current directory

2. docker run -it -p 9000:3000 -v $(pwd):/app node-docker-tutorial
> -d for detached mode

# Reference
1. [youtube](https://www.youtube.com/watch?v=CsWoMpK3EtE&t=659s)
