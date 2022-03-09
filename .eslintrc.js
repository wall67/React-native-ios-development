module.exports = {
  root: true,
  extends: '@react-native-community',

  plugins: ['eslint-plugin-no-inline-styles'],

  rules: {
    'no-inline-styles/no-inline-styles': 0,
  },
  {
    "plugins": [
      "react",
      "react-native"
    ]
  },

  {
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },

  {
    "parserOptions": [
      "ecmaFeatures": []
         "jsx": true
      } 
    ]
  },

  {
    "env": {
      "browser": true,
      "react-native/react-native": true,
    }
  }


};
