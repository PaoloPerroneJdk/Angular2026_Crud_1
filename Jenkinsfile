pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'npm run build -- --configuration production'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm run test -- --watch=false --browsers=ChromeHeadless'
            }
        }

    }
}