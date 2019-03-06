# mobile-ordering-app
## Pre-requisites

1. Install [Node.js](https://nodejs.org/en/). (LTS v10.x preferred)
2. Install CLI tools
    * `npm install -g react-native-cli expo-cli`
3. Setup [Android emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator.html)
4. Setup [iOS Simulator](https://docs.expo.io/versions/latest/introduction/installation.html#ios-simulator-2920). (macOS only)
5. Download Expo app on your device (optional)
    * [Apple App Store](https://itunes.com/apps/exponent)
    * [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Install

1. Clone the mobile-ordering-app repository
    * `git clone git@github.com:SheridanCS/mobile-ordering-app.git && cd mobile-ordering-app`
2. Run `npm install`
3. You may also have to run the command `react-native link`
    * it links assets (e.g. images) to the project

## Get a development version of the app on your device
1. In a terminal, navigate to the project directory.
2. Start the Expo server
    * `expo start`
3. Open the app in a simulator
    * *Android - `expo android`
    * iOS - `expo ios`

<sub>*Emulator needs to be started before executing this command. Start it from Android Studio or with command `$ANDROID_HOME/sdk/emulator -avd {AVD_NAME}`</sub>
