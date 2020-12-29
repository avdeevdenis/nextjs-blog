import React, { CSSProperties } from 'react';

import './index.scss';

import { articlesData } from '../../data/articles';

import { cn } from '@bem-react/classname';

const cnArticle = cn('Article');
const cnArticleTitle = cnArticle('Title');
const cnArticleDescription = cnArticle('Description');
const cnArticleBottom = cnArticle('Bottom');
const cnArticleReadButton = cnArticle('ReadButton');
const cnArticleCreatedAt = cnArticle('CreatedAt');
const cnArticleFavicon = cnArticle('Favicon');

export interface IArticleProps {
    // Заголовок статьи
    title: string;
    // Описание статьи
    description: string;
    // Дата написания
    createdAt?: string;
    // Ссылка на статью
    link: string;
    // Фавиконка страницы со статьей
    faviconLink?: string;
}

export const Article: React.FC<IArticleProps> = ({
    title, description, createdAt, link, faviconLink
}) => {
    const titleWrapped = title.trim();
    const faviconStyle: CSSProperties | undefined = faviconLink ? { backgroundImage: `url(${faviconLink})` } : undefined;

    return (
        <div className={cnArticle()}>
            <div className={cnArticleTitle}>
                <b>{titleWrapped.slice(0, 1)}</b>{titleWrapped.slice(1)}
            </div>
            <div className={cnArticleDescription}>{description}</div>
            <div className={cnArticleBottom}>
                <a href={link} title='Открыть в новой вкладке' className={cnArticleReadButton}>
                    <div style={faviconStyle} className={cnArticleFavicon} />
                    Read More
                </a>
                <div className={cnArticleCreatedAt}>{createdAt}</div>
            </div>
        </div>
    )
}

const Articles: React.FC = React.memo(() => {
    return (
        <div className='AricleList'>
            {articlesData.map((articleData) => {
                return <Article key={articleData.title} {...articleData} />
            })}
        </div>
    );
});

export default Articles;
