import React from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'


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
                    <Typography variant="h3" className={classes.title}> ユーザ登録 </Typography>
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
                    <TextField
                        id="standard-email"
                        label="Mail"
                        className={classes.textField}
                        margin="normal"
                    />
                    <div className={classes.buttonContainer}>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            <Link to='/Home' className="link">登録</Link>
                        </ColorButton>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Login
