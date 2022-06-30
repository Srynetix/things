import React from 'react';
import styles from './styles.module.scss';

interface TagProps {
    name: string,
    color: string
}

const Tag = ({ name, color }: TagProps) => (
    <div className={styles.tag} style={{backgroundColor: color}}>
        {name}
    </div>
)

export type TagState = "finished" | "active" | "paused" | "abandoned";

const TAG_COLORS = {
    "finished": "#24a335",
    "active": "#2d6c96",
    "paused": "#6d6d6d",
    "abandoned": "#ad363c"
};

const tagStateCapitalized = (state: TagState): string => {
    return state.charAt(0).toUpperCase() + state.substring(1);
}

interface StatusProps {
    state: TagState
}

export const StatusTag = ({ state }: StatusProps) => (
    <Tag name={tagStateCapitalized(state)} color={TAG_COLORS[state]} />
);

const DEFAULT_LANG_COLOR = "#123123";
const LANG_COLORS = {
    "C#/Godot": "#245335",
    "GDScript/Godot": "#2d6c96",
    "Python": "#2d6c96",
    "C": "#6d6d6d",
    "C++": "#6d6d6d",
    "Rust": "#a86632"
};

interface LangProps {
    lang: string
}

export const LangTag = ({ lang }: LangProps) => (
    <Tag name={lang} color={LANG_COLORS[lang] ?? DEFAULT_LANG_COLOR} />
);

export default Tag;
