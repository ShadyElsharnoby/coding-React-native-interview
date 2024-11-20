import { SVG } from '@/src/Constants/Svgs';
import { useMovieHook } from '@/src/hooks/useMovieHook';
import { getImageUrl } from '@/src/utils/helpers';
import { Image } from 'expo-image';
import React, { FC } from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import styles from './MovieCardInfo.styles';
type props = {
    path: string;
    onPress?: TouchableOpacityProps['onPress'];
    genre_ids: number[];
    id: number;
};
const MovieCardInfo: FC<props> = ({ path, onPress, genre_ids, id }: props) => {
    const { isLiked, onFavorites, genres } = useMovieHook({
        path,
        genre_ids,
        id,
    });

    const largerDot: string = '\u2022';

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={styles.imageContainer}
            disabled={!onPress}
        >
            <Image
                style={styles.image}
                source={getImageUrl(path, true)}
                contentFit="cover"
            />
            <TouchableOpacity
                style={styles.heartContainer}
                onPress={onFavorites}
            >
                {isLiked ? (
                    <SVG.HeartActive width={20} />
                ) : (
                    <SVG.Heart width={20} />
                )}
            </TouchableOpacity>
            <View style={styles.labelContainer}>
                <Text style={styles.largerDot}>{largerDot}</Text>
                <Text style={styles.type}>{genres}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(MovieCardInfo);
