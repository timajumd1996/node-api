pipeline {
    agent { label 'build-agent' }

    environment {
        APP_DIR = "/home/jenkins/node-api"
        REPO_URL = "https://github.com/timajumd1996/node-api.git"
    }

    stages {
        stage('Clone') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }

        stage('Install') {
            steps {
                sh '''
                    npm install
                '''
            }
        }

        stage('Test') {
            steps {
                // Optional: Add actual tests here if you have them
                sh 'echo "No tests defined."'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    # Ensure target directory exists
                    mkdir -p $APP_DIR

                    # Clone or update the repo in the deployment directory
                    if [ ! -d "$APP_DIR/.git" ]; then
                        git clone $REPO_URL $APP_DIR
                    else
                        cd $APP_DIR
                        git pull origin master
                    fi

                    cd $APP_DIR
                    npm install

                    # Restart the app using PM2
                    npm start &
                '''
            }
        }
    }

    post {
        failure {
            echo "Build or deploy failed!"
        }
        success {
            echo "CI/CD pipeline completed successfully!"
        }
    }
}
