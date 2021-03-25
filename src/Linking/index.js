import React, { useCallback } from 'react';
import {Linking} from 'react-native';

export default function handleicon(social_network) {
    
    const linkedinurl = 'https://www.linkedin.com/in/victor-souza-492765204/';
    const twitterurl = 'https://twitter.com/tckthecreator';
    const githuburl = 'https://github.com/tckthecreator';
    
    switch (social_network) {
        case 'linkedin':
            Linking.openURL(linkedinurl);
            break;
        case 'twitter':
            Linking.openURL(twitterurl);
            break;
        case 'github':
            Linking.openURL(githuburl);
            break;

    }
}   