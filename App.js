
import Dashboard from './components/Dashboard'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home'

const navigator = createStackNavigator(

  {
    home: Home,
    dashboard: Dashboard
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      title: 'Data App'
    }
  }
)


export default createAppContainer(navigator)