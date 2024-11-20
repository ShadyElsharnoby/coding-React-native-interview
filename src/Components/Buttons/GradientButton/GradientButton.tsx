import { COLORS } from '@/src/Theme/Colors';
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient';
import React, { FC } from 'react';
import {
    Text,
    TouchableOpacity,
    type TextStyle,
    type ViewStyle,
} from 'react-native';
import type { SvgProps } from 'react-native-svg';
import styles from './GradientButton.styles';

type props = {
    text: string;
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
    LeftIcon?: FC<SvgProps>;
    RightIcon?: FC<SvgProps>;
    colors?: LinearGradientProps['colors'];
    onPress?: () => void;
};
const GradientButton: FC<props> = ({
    text,
    textStyle,
    containerStyle,
    LeftIcon,
    RightIcon,
    colors = [COLORS.primary.blue.b70, COLORS.primary.blue.b100],
    onPress,
}: props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={containerStyle}
            onPress={onPress}
        >
            <LinearGradient
                start={{ x: 0, y: 0.1 }}
                end={{ x: 0, y: 1 }}
                colors={colors}
                style={styles.container}
            >
                {LeftIcon ? <LeftIcon {...styles.icon} /> : null}
                <Text style={[styles.text, textStyle]}>{text}</Text>
                {RightIcon ? <RightIcon {...styles.icon} /> : null}
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default GradientButton;
