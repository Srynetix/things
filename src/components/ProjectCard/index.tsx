import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { LangTag, StatusTag, TagState } from '../Tag';
import Link from '@docusaurus/Link';
import NoImage from '../NoImage';
import mediumZoom from 'medium-zoom';

interface Props {
    name: string,
    language: string,
    date: string,
    status: TagState,
    summary: JSX.Element,
    screenshots?: string[],
    link: string
}

const ProjectCard = (props: Props) => {
    const imageRef = useRef(null)
    const firstScreenshot = (props.screenshots || [])?.[0];
    useEffect(() => {
        if (imageRef.current) {
            const zoom = mediumZoom(imageRef.current, {
                background: "#000000dd"
            });

            // zoom.on("open", (e) => {
                // (e.target as any).style.width = undefined;
                // (e.target as any).style.height = undefined;
                // console.log(e);
            // });
        }
    }, [imageRef]);

    return (
        <div className={styles.card}>
            <div className={styles["card-header"]}>
                <div className={styles["card-project-name"]}>
                    <Link to={props.link}>{props.name}</Link>
                </div>
                <div className={styles["card-project-state"]}>
                    <StatusTag state={props.status} />
                </div>
            </div>
            {firstScreenshot
                ? <img className={styles["card-image"]} alt="screenshot" src={firstScreenshot} ref={imageRef} />
                : <NoImage />
            }
            <div className={styles["card-summary"]}>
                {props.summary}
            </div>
            <div className={styles["card-footer"]}>
                <div className={styles["card-date"]}>
                    {props.date}
                </div>
                <div className={styles["card-lang"]}>
                    <LangTag lang={props.language} />
                </div>
            </div>
        </div>
    )
};

ProjectCard.defaultProps = {
    screenshots: []
};

export default ProjectCard;
