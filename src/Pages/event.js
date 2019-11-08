import React from 'react';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tag from '../Components/Tag'

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: 'center',
        marginTop: theme.spacing(5)
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
}));

const name = `ブロックチェーンプロジェクト`;
const time = '2019/4/23(火)'
const get_mozaic = 20
const tag = 'IT'
const coach = {
    
}



export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3 className={classes.center}>{name}</h3>
            <div className={classes.wrapper}>
                <Typography noWrap variant="subtitle1">{`${time}~`}</Typography>
                <Tag tag={tag} />
            </div>
        </div>
    );
}