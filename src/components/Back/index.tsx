import React from 'react';
import Link from '@docusaurus/Link';

interface Props {
    link: string,
    name: string
}

const Back = ({ link, name }: Props) => {
    return (
        <p>
            <Link to={link}>🔙 Back to <b>{name}</b></Link>
        </p>
    )
};

Back.defaultProps = {
    link: "../"
}

export default Back;