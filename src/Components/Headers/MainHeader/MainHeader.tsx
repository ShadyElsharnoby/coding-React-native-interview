import { SH, SW } from '@/src/utils/Scale';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useMainHeaderHook } from '../hooks/useMainHeaderHook';
import styles from './MainHeader.styles';

const MainHeader: FC = () => {
    const { buttons } = useMainHeaderHook();
    return (
        <View style={styles.container}>
            {buttons.map(({ onPress, size, Icon, id }, index) => (
                <TouchableOpacity
                    key={`${id}${index}`}
                    style={styles.iconContainer}
                    onPress={onPress}
                >
                    {Icon ? (
                        <Icon
                            width={SW(size)}
                            height={SH(size)}
                        />
                    ) : null}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default React.memo(MainHeader);
