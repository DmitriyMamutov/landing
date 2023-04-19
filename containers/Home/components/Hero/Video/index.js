import styles from "./styles.module.scss";

const Video = (props) => {
  const { src } = props;

  return (
    <div className={styles["wrapper"]}>
      <video autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
