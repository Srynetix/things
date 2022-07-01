import mediumZoom from "medium-zoom";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  src: string;
  alt: string;
  borderRadius?: string;
  caption?: string;
  width?: string;
  height?: string;
}

const CenteredImage = (props: Props) => {
  useEffect(() => {
    mediumZoom(`.${styles.container} > img`, {
      background: "#000000dd",
    });
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{ borderRadius: props.borderRadius }}
      />
      {props.caption && <div className={styles.caption}>{props.caption}</div>}
    </div>
  );
};

CenteredImage.defaultProps = {
  borderRadius: "inherit",
};

export default CenteredImage;
