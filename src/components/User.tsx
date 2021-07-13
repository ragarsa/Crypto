import { useState } from "react";
import { Icon, SvgIcon } from "@material-ui/core";
import { makeStyles, Typography, Button } from "@material-ui/core";

interface User {
    uid: string;
    name: string;
    email?: string;
}

const tempUser: User = {
    uid: '123213asdad',
    name: 'Ra',
    email: 'raul'
}

const useStyles = makeStyles({
    userState: {
        margin: '4rem 0 0 0',
    },
    buttonUser: {
        background: 'black'
    }
})

export const User = () => {

    const classes = useStyles()
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: '123ABC',
            name: 'Raul'
        })
    }


    return (
        <div className={classes.userState}>
            <Typography variant="h3">User</Typography>

            <Button
                variant="outlined"
                color="primary"
                onClick={login}
            >Log in</Button>

            <pre>{JSON.stringify(user)}</pre>


            <Typography variant="srOnly">Create a user</Typography>
        </div>
    )
}

