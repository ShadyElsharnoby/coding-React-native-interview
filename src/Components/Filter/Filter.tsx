import { SVG } from '@/src/Constants/Svgs';
import useTranslationHook from '@/src/Lang/useTranslationHook';
import useMoviesStateHook from '@/src/Stores/hooks/useMoviesStateHook';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetFlashList,
} from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Filter.styles';
import FilterItem from './FilterItem/FilterItem';

const Filter = () => {
    const { genres, selectedGenres, onResetSelectedGenres } =
        useMoviesStateHook((state) => ({
            genres: state.genres,
            selectedGenres: state.selectedGenres,
            onResetSelectedGenres: state.onResetSelectedGenres,
        }));

    const { t } = useTranslationHook();
    // hooks
    const sheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['50%'], []);
    const keyExtractor = (item) => item.id;
    // callbacks
    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(0);
    }, []);

    // render
    const renderItem = useCallback(({ item }) => {
        return (
            <FilterItem
                id={item.id}
                name={item.name}
            />
        );
    }, []);

    // renders
    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        [],
    );

    const listFooterComponent = useCallback(() => {
        if (selectedGenres.length <= 0) {
            return null;
        }
        return (
            <TouchableOpacity
                style={styles.footerContainer}
                onPress={onResetSelectedGenres}
            >
                <Text style={styles.footerText}>{t('reset')}</Text>
            </TouchableOpacity>
        );
    }, [onResetSelectedGenres, selectedGenres.length, t]);

    return (
        <>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleSnapPress(1)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{t('filter')}</Text>
                    <SVG.Filter width={20} />
                </TouchableOpacity>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={snapPoints}
                enableDynamicSizing={false}
                index={-1}
                backdropComponent={renderBackdrop}
                enablePanDownToClose
            >
                <BottomSheetFlashList
                    data={genres}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    estimatedItemSize={35}
                    numColumns={3}
                    contentContainerStyle={styles.contentContainer}
                    ListFooterComponent={listFooterComponent}
                />
            </BottomSheet>
        </>
    );
};

export default React.memo(Filter);
