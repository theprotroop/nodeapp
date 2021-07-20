# Commands

### docker-compose can easily update your app

### 1. docker-compose run command 
>``` docker-compose up -d --build ```

### 2. Getting running docker container's id which is qual to name
#### This command only print the output if the name=mynode container is up
#### Stop the container
>``` docker ps -f name=mynode -q | xargs --no-run-if-empty docker container stop ```

#### Remove the container
>``` docker container ls -a -fname=mynode -q | xargs -r docker container rm ```
