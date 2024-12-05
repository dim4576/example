import classes from "./UserBar.module.css"

const UserBar = () => {
    return (
        <div className={classes.userbar}>
            <h1 className={classes.header}>ВОЙТИ</h1>
            <h1 className={classes.header}>РЕГИСТРАЦИЯ</h1>
            <h1 className={classes.header}>ВЫЙТИ</h1>
        </div>
    )
}

export default UserBar