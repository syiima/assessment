# Assessment - React Native

Simple and basic app created to display solution for problems to be solved. Created using React Native to be run on iOS and Android, as well as on web. There are 3 main functions in the app: 

| Function | Summary |
| ------ | ------ |
| Calculator | Used to calculate two sums of number being inputted |
| Navbar | Used to display navigation bar. Has different style or format for web and mobile platform <br/> Mobile - Has a hamburger menu that can be clicked to toggle open /close menu bar. <br/> Web - Display links available with search function |
| Two Sum | Used to input array, and sum of target. It will then sort the array by non-decreasing order, find indices which will return sum that meets the target input |


## How To

### 1. Clone repository

Project can be cloned from Github to your folder. Click on `Code` to choose preferred download/clone method

### 2. Install Dependencies

Make sure you have environment setup for React Native. Yarn is recommended for installation
From root project, run command below to start installation:
```
yarn install
```

For ios, extra steps required for installation
```
cd ios && yarn cocoapods
```

### 3. Running/ Testing 
Before testing the app, please ensure that environment has been setup. Please refer [here](https://reactnative.dev/docs/set-up-your-environment?os=windows) for setup steps. 

There are 3 options available to run/test the code
- run `yarn ios` to build for iOS platform
- run `yarn android` to build for Android platform
- run `yarn web` to open and run in web mode

Notes:
- For Android:
    - Please ensure that JAVA_HOME, ANDROID_HOME has already be configured.
    - Please make sure emulator is already opened before running
- For iOS:
    - MacOS is required as Xcode need to be installed


## Folder Structure
```
.
├── README.md
├── ios
├── android
├── package.json
├── index.js
├── index.web.js
├── App.tsx
├── app.json
└── src
    ├── components
    ├── navigators
    ├── screens
    └── configs

```
In screens, all the solutions file can be found. Each solution has a separate `styles.js` and `index.js` for styles and logic/UI respectively. 
```
└── screens
    └── calculator
        ├── index.js
        └── styles.js
```
In components, 
- `ui` being used to create components commonly used like Text with different formatting depending on usage
- `modals` being used to create reusable component like showing alert, or dialog box
```
└── components
    ├── ui
    └── modals
```

## Functions/ Solutions

As mentioned, the app is created to display solutions for problems or questions being asked. 

### 1. Calculator
Two inputs with number can be inputted to get the sum. Alert will be displayed if only non or only one number is being entered. It will convert input to `Number()` to prevent NaN result
```
const handleAdd = () => {
    if(firstNum !== '' && secondNum !== ''){
        let subtotal = Number(firstNum) + Number(secondNum)
        if(isNaN(subtotal)){
            AlertBox('Please enter only numbers')
        } else {
            setTotal(subtotal)
        }
        
    } else {
        AlertBox('Please enter both numbers')
    }
}
```

### 2. Navbar
For navbar, different files can be found depending if it is running on web or mobile platform. For both platforms, `NavigationTitle` which consists of name and route for the title will be mapped and displayed. 
```
<View style={styles.menu}>
    {NavigationTitle.map((item, ind) => {
        return(
            <StyledText type={TextFormat.Label} key={ind} style={{paddingVertical: 5,}}>{item.name}</StyledText>
        )
    })}
</View>
```
Different formatting style can also be seen on both platforms.  
  - iOS & Android display format: `NavigationTitle` will be displayed in a menu box, which can be toggled by clicking on hamburger menu
```
<View style={styles.rightSide}>
      <Text style={styles.menuIcon}>⌕</Text>
      <Pressable onPress={() => setToggleMenu(prev => !prev)}>
          <Text style={styles.menuIcon}>{toggleMenu ? '✕' : '☰'}</Text>
      </Pressable>
  </View>
```
- Web display format: `NavigationTitle` will be displayed in a navigation bar at the top, with routes/links along with search function
```
<View style={styles.navItems}>
    {NavigationTitle.map((item, ind) => {
        return(
            <StyledText type={TextFormat.Label} key={ind}>
                <a href={item.route} style={styles.navLink}>{item.name}</a>
            </StyledText>
        )
    })}
</View>
<TextInput
    placeholder="Search Documentation..."
    style={styles.searchInput}
/>
```





