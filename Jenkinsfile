pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('MySQL Test') {
            steps {
                bat '''
                cd C:\\xampp\\mysql\\bin
                mysql -u root -e "SELECT * FROM mysql_jenkins.posts;"
                '''
            }
        }
    }
}