# React Native - Expo Setup

## Create a New Expo App

```bash
npx create-expo-app appName --template
```

# Libraries Installation (at least used in this project) 

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
npx expo install expo-notifications expo-device
npx expo install @expo/vector-icons
npx expo install zustand
npx expo install @react-native-async-storage/async-storage
npx expo install expo-haptics
npx expo install date-fns
npx expo install expo-linear-gradient
npx expo install expo-image-picker
npx expo install expo-file-system
npx expo install expo-dev-client
npx expo install expo-font @expo-google-fonts/caveat
npx expo install expo-quick-actions
npx expo install react-native-web react-dom (optional)

## Scheme

Add the scheme to your app.json:

```bash
{
  "scheme": "appName"
}
```

## Optional Web

In the web section of app.json:

```bash
{
  "web": {
    "favicon": "./assets/favicon.png",
    "bundler": "metro"
  }
}
```

# Deployment

npx expo prebuild --platform ios
npx expo prebuild --platform android
npx expo prebuild --platform ios --clean 
# or
npx expo prebuild --platform android --clean 
npx expo run:ios
# or
npx expo run:android

# Linting

```bash
npx expo lint
```

# Using EAS

```bash
npm i -g eas-cli
eas init
eas build:configure
# Select "all" when prompted
```

# Tools

Use Expo Orbit for installing API/APK.