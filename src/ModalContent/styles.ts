import { makeStyles, Theme, createStyles } from '@material-ui/core';
import aboutImage from '../img/allbinary-about.jpg';

const modalHeightXS = 150;

export default () =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {},
            body: {
                position: 'relative',
                width: '100%',
            },
            appBar: {
                backgroundColor: '#fff',
                color: theme.palette.text.primary,
                borderRadius: 0,
                height: 80,
                padding: theme.spacing(3, 5),
            },
            icon: {
                display: 'none',
                width: '8%',
                height: 'auto',
                position: 'absolute',
                left: 52,
                top: 126,
                zIndex: 0,
                opacity: 0.2,
                color: '#2d6ee0',
                [theme.breakpoints.down('lg')]: {
                    opacity: 0,
                },
            },
            toolBar: {
                height: 120,
                padding: 0,
                color: '#2d6ee0',
            },
            guidePanel: {},
            guidePanelBody: {
                color: theme.palette.getContrastText('rgb(230, 230, 230)'),
                padding: theme.spacing(3, 5),
                overflow: 'auto',
                height: modalHeightXS,
                '&.--about': {
                    backgroundImage: 'url(' + aboutImage + ')',
                    backgroundSize: 'cover',
                },
            },
            paper_body: {
                position: 'relative',
                height: 'auto',
                overflow: 'auto',
                '&.--padding': {
                    padding: theme.spacing(3, 5),
                },
            },
            textField: {
                width: '100%',
                marginBottom: theme.spacing(1),
            },
            bread: {
                fontSize: 16,
            },
            button_bar: {
                textAlign: 'right',
                height: 74,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                padding: theme.spacing(0, 3),
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row-reverse',
                [theme.breakpoints.down('lg')]: {
                    position: 'fixed',
                    width: 'calc(100% - 580px)',
                    bottom: 0,
                    left: 'unset',
                    right: 0,
                    padding: 0,
                },
            },
            button: {
                margin: theme.spacing(2),
                boxShadow: 'none',
                padding: theme.spacing(1.5, 8),
            },
            title: {
                fontSize: 28,
            },
        }),
    );
