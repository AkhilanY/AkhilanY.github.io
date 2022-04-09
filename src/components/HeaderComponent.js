import styles from './HeaderComponent.module.css';

function HeaderComponent() {
    return (
        <div className={styles.header}>
            <h1>COBROS</h1>
            <div><p><span>BORN</span> to <span>CODE</span>. <span>LIVE</span> to <span>CODE</span>.</p></div>
        </div>
    )
}

export default HeaderComponent;