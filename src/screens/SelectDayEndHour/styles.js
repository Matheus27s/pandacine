import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.nave,
        paddingHorizontal: 24,
    },
    containerVideo: {
        width: theme.size.fullWidth / 1.2,
        height: theme.size.halfHeight / 1.7,
        backgroundColor: theme.colors.black,
        borderRadius: 10,
        flex: 1
    },
    video: {
        width: theme.size.fullWidth / 1.2,
        height: theme.size.halfHeight / 1.7,
        borderRadius: 10
    },
    containerSelect: {
        height: 150,
        marginVertical: 16
    },
    containerDays: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100
    },
    days: {
        backgroundColor: theme.colors.blue,
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 54,
        height: 84,
        borderRadius: 20,
    },
    containerHours: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 38,
        width: theme.size.fullWidth
    },
    hour: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        width: 100
    },
    containerCheck: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
    footer: {
        marginBottom: 16,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        color: theme.colors.blue,
        fontFamily: theme.fonts.bold,
        fontSize: theme.text.title
    },
    content: {
        color: theme.colors.white,
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