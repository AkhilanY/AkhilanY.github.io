import styles from './VideoComponent.module.css';
import video from '../img/final-cb-home.mp4';
import img from '../img/final-cb-home-pic.jpg';

function VideoComponent() {
    return (
        <div className={styles.container}>
            <p></p>
            <video autoPlay muted loop poster={img}>
                <source src={video} type='video/mp4' />
            </video>
        </div>
    )
}

export default VideoComponent;