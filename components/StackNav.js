import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import EntryDetail from './EntryDetail';
import { white, purple } from '../utils/colors';

const StackNav = createStackNavigator({
  home: {
    screen: TabNav,
    navigationOptions: {
      header: null
    }
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    })
  }
});

export default createAppContainer(StackNav);
