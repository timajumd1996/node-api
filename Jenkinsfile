pipeline {
    agent { label 'build-agent' }

    stages {
        stage('Check Agent') {
            steps {
                sh 'echo Running on $(hostname)'
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}
