
import React from 'react';

interface HtmlRendererProps {
    htmlString: string;
    className?: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString, className }) => {
    return <div className={className} dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default HtmlRenderer;
