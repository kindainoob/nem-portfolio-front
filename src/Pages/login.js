import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, TextField, Button } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    centering: {
        textAlign: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    title: {
        color: '#eea5f6'
    },
    titleContainer: {
        marginTop: theme.spacing(20)
    },
    buttonContainer: {
        marginTop: theme.spacing(3)
    },
    link: {
        color: "black",
        textDecoration: "none",
    }

}))



const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const Login = () => {
    const classes = useStyles()
    return (
        <div>

            <div className={classes.centering}>
                <div className={classes.titleContainer}>
                    <Typography variant="h3" className={classes.title}> ログイン </Typography>
                </div>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-uncontrolled"
                        label="学籍番号"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <div className={classes.buttonContainer}>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            <Link to='/Home' className="link">ログイン</Link>
                        </ColorButton>
                    </div>
                </form>
                <Link to='/Registration' className="link">
                    <div className={classes.buttonContainer} >
                        <Button variant="outlined">
                            ユーザ登録
                        </Button>
                    </div>
                </Link>
            </div>

        </div>
    )

}

export default Login
