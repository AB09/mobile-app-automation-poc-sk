# mobile-app-automation-poc-sk
This POC is for SK for their app using Appium, Webdriver running on Android

# Prerequisites

Install Android Studio
Install Java 
Install Appium desktop

# Setting variables 

Mac users - Open `.bash_profile` and set below variables 

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home
export PATH=$PATH:$JAVA_HOME/bin
export PATH=$PATH:$JAVA_HOME/lib
export ANDROID_HOME=/Users/``<userName>``/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/build-tools
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools/lib/x86_64


# Setup and Installation 
1.  Clone repository using `git clone https://github.com/AB09/mobile-app-automation-poc-sk.git`
2.  From the project root Run `npm install` on your terminal 
3.  Open Android Studio and open AVD manager and run your emulator

# Execution 
To run the tests execute below command on your terminal 
`npm test`

To run API tests **ONLY** execute below command on your terminal
`npm run test-api`

To run UI APP tests **ONLY** execute below command on your terminal
`npm run test-ui`


# Reporting

1. I am using mochawesome reporter to log my test results. After the tests is completed, individual json files are created for
individual spec file and later using `onCompleteHook` those individual json are merged
2. Later I run below command to generate HTML report based on the json 
`npm run generateMochawesome`



