import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.colors.nave,
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    footer: {
        marginBottom: 16
    },
    title: {
        color: theme.colors.white,
        fontFamily: theme.fonts.medium,
        fontSize: theme.text.title,
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
    image: {
        height: theme.size.halfHeight,
    },
});