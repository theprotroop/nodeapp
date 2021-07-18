pipeline{
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }
    stages{
        stage('Build docker image'){
            steps{
                sh "docker build . -t theprotroop/my-node-app:${DOCKER_TAG}"
            }
        }
        stage('Dockerhub push'){
            steps{
                withCredentials([string(credentialsId: 'dockerhub-password', variable: 'dockerPwd')]) {
                    sh 'docker login -u theprotroop -p "${dockerPwd}"'
                    sh "docker push theprotroop/my-node-app:${DOCKER_TAG}"
                }
            }
        }
        stage('Deploy on local machine'){
            steps{
                // sh "docker pull theprotroop/my-node-app:${DOCKER_TAG}"
                sh "docker stop (docker ps -a -q)"
                sh "docker rm (docker ps -a -q)"
                sh "docker run -d -p 4000:3000 theprotroop/my-node-app:${DOCKER_TAG}"
            }
        }
    }
}

def getDockerTag(){
    def tag = sh script: 'git rev-parse HEAD', returnStdout: true
    return tag
}
