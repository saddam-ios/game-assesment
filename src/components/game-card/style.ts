import { StyleSheet } from 'react-native';
import {SCREEN_WIDTH} from '../../common'

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        height: 100, width: SCREEN_WIDTH - 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    imageAndTextContainerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 100,
        height: 90,
        margin: 5,
        borderRadius: 10,
        resizeMode: 'stretch',
    },
    textContainerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    titleTextStyle: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        color: 'black'
    },
    publisherTextStyle: {
        flex: 1,
        padding: 5,
        color: 'black'
    }
});

export default styles;