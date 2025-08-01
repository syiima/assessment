# Assessment - React Native

Simple and basic app created to view answers for questions asked

---

## How To

### 1. Clone repository

Project can be cloned from Github to your folder 

### 2. Install Dependencies

Make sure you have environment setup for React Native. Yarn is recommended for installation

From root project, run command below to start installation:
```
yarn install
```

If project will be running on ios, extra installation is required, which is :
```cd ios && yarn cocoapods```

### 3. Running/ Testing 
There are 3 options available to run/test the code 

- Using ios, by running `yarn ios`
- Using android, by running `yarn android`
- Using web, by running `yarn web`

Notes:
- For android, if using emulator, please ensure emulator is already running
- For web, please reload on site if different view changed on `App.tsx`

### 4. Switch Between Questions

To view specific question, open `App.tsx` file and modify rendered component depending on which question to be viewed

```
// App.tsx

import Calculator from './src/answers/Calculator';
import Navbar from './src/answers/Navbar';
import TwoSum from './src/answers/TwoSum';

function App() {
  return (
    <View style={styles.container}>
      <Calculator />  // Change this to <Navbar /> or <TwoSum /> to test/view different answers
    </View>
  );
}

```

### 5. Alternative to run/test code

Another alternative for quick code check, can be done using [Snack Expo](https://snack.expo.dev/). 
Code can be paste directly from any page of the answers

---
Thank you, and have fun~





