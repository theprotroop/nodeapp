pipeline{
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
    }
    stages{
        stage('Build docker and deploy image'){
            steps{
                // sh "docker build . -t theprotroop/my-node-app:${DOCKER_TAG}"
                sh "docker-compose up -d --build"
            }
        }
        stage('Dockerhub push'){
            steps{
                withCredentials([string(credentialsId: 'dockerhub-password', variable: 'dockerPwd')]) {
                    sh 'docker login -u theprotroop -p ${dockerPwd}'
              }
              sh "docker push theprotroop/n22:${DOCKER_TAG}"
            }
        }
//         stage('Deploy on local machine'){
//             steps{
//                 // sh "docker pull theprotroop/my-node-app:${DOCKER_TAG}"
//                 // sh "docker stop (docker ps -a -q)"
//                 // sh "docker rm (docker ps -a -q)"
//                 sh 'docker-compose up -d'
//             }
//         }
    }
}

def getDockerTag(){
    def tag = sh script: 'git rev-parse HEAD', returnStdout: true
    return tag
}
