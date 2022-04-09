import image from '../img/icon.ico';
import styles from './IconSticker.module.css';

function IconSticker() {
    return <img className={styles.icon} src={image} height={50} width={50} alt=''/>
}

export default IconSticker;