import GradientButton from '@/src/Components/Buttons/GradientButton/GradientButton';
import useMovieGenresHook from '@/src/hooks/useMovieGenresHook';
import { COLORS } from '@/src/Theme/Colors';
import { getImageUrl } from '@/src/utils/helpers';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC, useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useMainMovieHook } from './hooks/useMainMovieHook';
import styles from './MainMovie.styles';

type props = {
    ids: number[];
    url: string;
    releaseDate: string;
    title: string;
    time: number;
};
const MainMovie: FC<props> = ({
    url,
    title,
    releaseDate,
    ids,
    time,
}: props) => {
    const { buttons } = useMainMovieHook();
    const { result } = useMovieGenresHook({
        time,
        releaseDate,
        ids,
    });

    // renderMainButtons
    const renderBtn = useMemo(() => {
        return buttons.map(({ id, buttonsTitle, onPress, Icon }) => (
            <GradientButton
                key={id}
                text={buttonsTitle}
                containerStyle={styles.button}
                onPress={onPress}
                LeftIcon={Icon}
            />
        ));
    }, [buttons]);

    // render movie content
    const renderContent = useMemo(() => {
        return (
            <View style={styles.contentContainer}>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >
                    {title}
                </Text>
                <Text
                    style={styles.movieInfo}
                    numberOfLines={1}
                >
                    {result}
                </Text>
                <View style={styles.buttonContainer}>{renderBtn}</View>
            </View>
        );
    }, [result, title, renderBtn]);

    // render main image
    const renderImage = useMemo(
        () => (
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={getImageUrl(url, true)}
                    contentFit="cover"
                    transition={500}
                />
                <LinearGradient
                    colors={['transparent', COLORS.primary.blue.b100]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1.2 }}
                    style={styles.image}
                />
            </View>
        ),
        [url],
    );

    return (
        <View style={styles.container}>
            {renderImage}
            <SafeAreaView style={styles.mainContent}>
                {renderContent}
            </SafeAreaView>
        </View>
    );
};

export default React.memo(MainMovie);
