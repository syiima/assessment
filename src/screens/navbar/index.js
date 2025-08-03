import React from 'react';
import { Platform, View } from 'react-native';
import { styles } from './styles';

import WebNavbar from './index.web';
import MobileNavbar from './index.mobile';

const Navbar = () => {
  return (
    <View style={styles.mainContainer}>
      {Platform.OS === 'web' ? <WebNavbar /> : <MobileNavbar />}
    </View>
  );
};

export default Navbar;
