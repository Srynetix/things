import React, { useEffect } from "react";
import IconExternalLink from "@theme/IconExternalLink";
import styles from "./styles.module.scss";
import mediumZoom from "medium-zoom";
import { FaGithub } from "react-icons/fa";

interface Props {
  urls: string[];
  screenshots?: string[];
  screenshotWidth?: number;
  screenshotHeight: number;
}

const projectNameFromUrl = (url: string): string => {
  const split = url.split("/");
  return split[split.length - 1];
};

const ProjectSummary = (props: Props) => {
  useEffect(() => {
    mediumZoom(`.${styles["card-screenshot-img"]}`, {
      background: "#000000dd",
    });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles["card-fields"]}>
        <div className={styles["card-field"]}>
          <div className={styles["card-field-label"]}>
            <FaGithub /> GitHub Project
          </div>
          <div className={styles["card-field-value"]}>
            <div className={styles["card-field-urls"]}>
              {props.urls.map((url) => (
                <a
                  key={url}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {projectNameFromUrl(url)}
                  <IconExternalLink />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["card-screenshot"]}>
        {props.screenshots &&
          props.screenshots.map((screenshot) => (
            <img
              className={styles["card-screenshot-img"]}
              key={screenshot}
              src={screenshot}
              alt="screenshot"
              width={props.screenshotWidth}
              height={props.screenshotHeight}
            />
          ))}
      </div>
    </div>
  );
};

ProjectSummary.defaultProps = {
  screenshotWidth: 300,
};

export default ProjectSummary;
