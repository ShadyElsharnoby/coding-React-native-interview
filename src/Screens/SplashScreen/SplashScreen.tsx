import { SVG } from '@/src/Constants/Svgs';
import useTranslationHook from '@/src/Lang/useTranslationHook';
import React, { FC, Suspense } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated'; // Updated import
import styles from './SplashScreen.Styles';
import { useSplashScreenHook } from './hooks/useSplashScreenHook';

const SplashScreen: FC = () => {
    const { animatedStyle } = useSplashScreenHook();
    const { t } = useTranslationHook();

    return (
        <Suspense fallback={null}>
            <View style={styles.container}>
                <Animated.View style={[styles.logoContainer, animatedStyle]}>
                    <SVG.Play
                        width={200}
                        height={200}
                    />
                    <Text style={styles.title}>{t('cinemaHub')}</Text>
                </Animated.View>
            </View>
        </Suspense>
    );
};

export default React.memo(SplashScreen);
