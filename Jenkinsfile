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

        stage('Test Angular') {
            steps {
                script {
                    def result = bat(
                        script: 'npm run test -- --watch=false --browsers=ChromeHeadless',
                        returnStatus: true
                    )

                    if (result != 0) {
                        error("❌ Test Angular falliti")
                    }
                }
            }
        }

        stage('MySQL Test') {
            steps {
                script {
                    def result = bat(
                        script: '''
                        cd C:\\xampp\\mysql\\bin
                        mysql -u root -e "SELECT * FROM mysql_jenkins.posts;"
                        ''',
                        returnStatus: true
                    )

                    if (result != 0) {
                        error("❌ MySQL test fallito")
                    }
                }
            }
        }
    }

    post {
        failure {
            mail to: 'paoloperroenpaolo@gmail.com',
                 subject: "❌ Build FALLITA - ${env.JOB_NAME}",
                 body: """
Errore nella pipeline.

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
URL: ${env.BUILD_URL}

Controlla quale stage è fallito (Angular o MySQL).
"""
        }
    }
}