import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.blue,
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
        color: theme.colors.blue,
        fontFamily: theme.fonts.light,
        fontSize: theme.text.comment
    }
});