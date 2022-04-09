import HeaderComponent from "../components/HeaderComponent";
import VideoComponent from "../components/VideoComponent";
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div className={styles.container}>
        <HeaderComponent />
        <VideoComponent />
        </div>
    )
}

export default HomePage;