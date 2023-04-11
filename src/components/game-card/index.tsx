import React from 'react'
import { View, Text, Image, TouchableOpacity, NativeModules } from 'react-native'

import styles from './style';

interface IGameCardProps {
    id: number,
    title: string,
    imageUri: string,
    publisher: string
}

export const GameCard: React.FC<IGameCardProps> = (props: IGameCardProps) => {
    const { title, imageUri, publisher } = props;

    const handleCardClick = () => {
    }

    return (
        <TouchableOpacity onPress={handleCardClick}>
            <View style={styles.containerStyle}>
                <View style={styles.imageAndTextContainerStyle}>
                    <Image source={{ uri: imageUri }} style={styles.imageStyle} />
                    <View style={styles.textContainerStyle}>
                        <Text style={styles.titleTextStyle} numberOfLines={2}>{`Title : ${title}`}</Text>
                        <Text style={styles.publisherTextStyle} numberOfLines={2}>{`Publisher : ${publisher}`}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};


