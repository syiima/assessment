import React from 'react';
import { Platform } from 'react-native';
import SafeAreaViewContainer from '../../components/ui/SafeAreaViewContainer';

import WebNavbar from './index.web';
import MobileNavbar from './index.mobile';

const Navbar = () => {
    return(
        <SafeAreaViewContainer>
            {Platform.OS === 'web' ? (
                <WebNavbar/>
            ) : (
                <MobileNavbar/>
            )}
        </SafeAreaViewContainer>
    )
}

export default Navbar;