This is sample project to demonstrate the Dockerized clean architecture of node project.

Ref youtube [https://www.youtube.com/watch?v=CsWoMpK3EtE&t=659s]

#Docker steps
1. docker build -t node-docker-tutorial .
2. docker run -it -p 9000:3000 -v ${pwd}:/app node-docker-tutorial
