pipeline {
  agent any

  tools {
    maven "Maven"
  }

  stages {
    stage ("Checkout code") {
      steps {
        git url: "https://github.com/amodh-2002/testing-react-router-dom.git", branch: "main"
      }
    }

    stage ("Build stage") {
      steps {
        sh "echo building!!" 
      }
    }
  }
}
