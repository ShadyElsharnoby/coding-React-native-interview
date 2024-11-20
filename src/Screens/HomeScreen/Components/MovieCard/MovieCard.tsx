import { SVG } from '@/src/Constants/Svgs';
import useUserStateHook from '@/src/Stores/hooks/useUserStateHook';
import { getImageUrl } from '@/src/utils/helpers';
import { Image } from 'expo-image';
import React, { FC, useCallback } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './MovieCard.styles';

type props = {
    path: string;
    onPress?: TouchableOpacityProps['onPress'];
    id: number;
    genre_ids: number[];
};
const MovieCard: FC<props> = ({ path, id, onPress, genre_ids }: props) => {
    const { onAddToFavorites, isLiked } = useUserStateHook((state) => ({
        isLiked: state.favorites.find((f) => f.id === id),
        onAddToFavorites: state.onAddToFavorites,
    }));
    const onFavorites = useCallback(
        () =>
            onAddToFavorites({
                poster_path: path,
                genre_ids: genre_ids,
                id,
            }),
        [genre_ids, id, onAddToFavorites, path],
    );

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            disabled={!onPress}
            style={styles.imageContainer}
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
        </TouchableOpacity>
    );
};

export default React.memo(MovieCard);
