import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2210092Navigator from '../features/BlankScreen2210092/navigator';
import BlankScreen1210091Navigator from '../features/BlankScreen1210091/navigator';
import BlankScreen0210090Navigator from '../features/BlankScreen0210090/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2210092: { screen: BlankScreen2210092Navigator },
BlankScreen1210091: { screen: BlankScreen1210091Navigator },
BlankScreen0210090: { screen: BlankScreen0210090Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
