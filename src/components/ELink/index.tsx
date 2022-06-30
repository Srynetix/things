import React from 'react';
import IconExternalLink from '@theme/IconExternalLink';

interface Props {
    href: string,
    children: string
}

const ELink = ({ children, href }: Props) => (
    <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
        <IconExternalLink />
    </a>
)

export default ELink;
