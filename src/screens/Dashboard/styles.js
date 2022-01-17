import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.colors.nave,
    },
    imageBackground: {
        flex: 1,
        height: null,
        opacity: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideView: {
        marginTop: 20,
        width: 100,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        width: theme.size.fullWidth,
    },
    carousel: {
        flex: 1,
        overflow: 'visible',
    },
    carouselIcon: {
        position: 'absolute',
        top: 25,
        right: 25,
    },
    carouselInfo: {
        width: 300,
        height: 100,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 16
    },
    carouselImage: {
        alignSelf: 'center',
        width: 300,
        height: 500,
        borderTopLeftRadius: 140,
        borderTopRightRadius: 140,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    carouselContainerStars: {
        flexDirection: 'row',
        marginTop: 16
    },
    absoluteFill: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    title: {
        color: theme.colors.blue,
        fontFamily: theme.fonts.bold,
        fontSize: theme.text.title
    },
    content: {
        color: theme.colors.blue,
        fontFamily: theme.fonts.medium,
        fontSize: theme.text.content
    },
    comment: {
        color: theme.colors.white,
        fontFamily: theme.fonts.light,
        fontSize: theme.text.comment,
        textAlign: 'justify',
        marginBottom: 16,
        marginTop: 16
    },
});