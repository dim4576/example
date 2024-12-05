import classes from "./UserBar.module.css"

const UserBar = () => {
    return (
        <div className={classes.userbar}>
            <h3 className={classes.header}>ВОЙТИ</h3>
            <h3 className={classes.header}>РЕГИСТРАЦИЯ</h3>
            <h3 className={classes.header}>ВЫЙТИ</h3>
        </div>
    )
}

export default UserBar