# mobile-ordering-app
## Pre-requisites

1. Install [Node.js](https://nodejs.org/en/). (LTS v10.x preferred)
2. Install [Yarn Package Manager](https://yarnpkg.com/en/docs/install)
3. Install CLI tools
    * `yarn global add react-native-cli expo-cli`
4. Setup [Android emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator.html)
5. Setup [iOS Simulator](https://docs.expo.io/versions/latest/introduction/installation.html#ios-simulator-2920) (macOS only)
6. (Optional) Download Expo app on your device
    * [Apple App Store](https://itunes.com/apps/exponent)
    * [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## Install

1. Clone the mobile-ordering-app repository
    * `git clone git@github.com:SheridanCS/mobile-ordering-app.git`
2. Navigate to the project directory
    * `cd mobile-ordering-app`
3. Run `yarn install`

## Get a development version of the app on your device
1. In a terminal, navigate to the project directory.
2. Start the Expo server
    * `expo start`
3. Open the app in a simulator
    * *Android - `expo android`
    * iOS - `expo ios`

<sub>*Emulator needs to be started before executing this command. Start it from Android Studio or with command `$ANDROID_HOME/sdk/emulator -avd {AVD_NAME}`</sub>
