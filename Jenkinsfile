pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t chew01/kitsuiro-portfolio . --no-cache'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                withDockerRegistry([credentialsId: "dockerhub", url: ""]) {
                    sh 'docker push chew01/kitsuiro-portfolio:latest'
                }
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker rmi -f chew01/kitsuiro-portfolio'
            }
        }
    }
}
