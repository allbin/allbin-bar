import { makeStyles, createStyles } from '@material-ui/core';
const borderRadius = '4px';
const modalHeightXS = 400;
const modalHeightLG = 500;
export default () => makeStyles((theme) => createStyles({
    root: {},
    body: {
        borderRadius: borderRadius,
        position: 'relative',
        width: '100%',
    },
    appBar: {
        borderRadius: borderRadius + ' ' + borderRadius + ' 0 0',
        height: 72,
    },
    toolBar: {
        height: 72,
    },
    guidePanel: {},
    guidePanelBody: {
        borderRight: '1px solid rgb(180, 180, 180)',
        borderRadius: '0 0 0 ' + borderRadius,
        backgroundColor: 'rgb(230, 230, 230)',
        color: theme.palette.getContrastText('rgb(230, 230, 230)'),
        padding: theme.spacing(2, 2),
        overflow: 'auto',
        height: modalHeightXS,
        [theme.breakpoints.up('md')]: {
            height: modalHeightLG,
        },
    },
    paper_body: {
        backgroundColor: 'rgb(200, 200, 200)',
        position: 'relative',
        height: modalHeightXS,
        [theme.breakpoints.up('md')]: {
            height: modalHeightLG,
        },
        '&.--padding': {
            padding: theme.spacing(2),
        },
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    button_bar: {
        borderTop: '1px solid rgb(180, 180, 180)',
        textAlign: 'right',
        height: 74,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: theme.spacing(0, 3),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    button: {
        margin: theme.spacing(1.5),
        boxShadow: 'none',
        padding: theme.spacing(1.5, 5),
        borderRadius: theme.spacing(1),
    },
}));

//# sourceMappingURL=styles.js.map
