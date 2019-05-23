import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: About }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
