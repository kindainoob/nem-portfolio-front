import React from 'react';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tag from '../Components/Tag'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    wrapper: {
        display: 'flex'
    },
    link: {
        color: "black",
        textDecoration: "none",
    }
}));

const name = `ブロックチェーンプロジェクト`;
const time = '2019/4/23(火)'
const get_mozaic = 20
const tag = 'IT'

export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to='/events/1' className={classes.link}>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap variant="subtitle1">{name}</Typography>
                            <div className={classes.wrapper}>
                                <Typography noWrap variant="subtitle1">{`${time}~`}</Typography>
                                <Tag tag={tag} />
                            </div>
                            <Typography noWrap variant="subtitle1">{`参加モザイク数:${get_mozaic}`}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </div>
    );
}