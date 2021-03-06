import React from 'react';
import { cn } from '@bem-react/classname';
import Link from 'next/link';

import BurgerIcon from '../BurgerIcon';

import './index.scss';
import { AppWrapper } from '..';

export const cnHeader = cn('Header');
export const cnHeaderWrapper = cnHeader('Wrapper');
export const cnHeaderMenu = cnHeader('Menu');
export const cnHeaderMenuItem = cnHeader('MenuItem');
export const cnHeaderMenuLink = cnHeader('MenuLink');
export const cnHeaderMenuButton = cnHeader('MenuButton');
export const cnHeaderLogo = cnHeader('Logo');
export const cnHeaderSocial = cnHeader('Social');
export const cnHeaderBurger = cnHeader('Burger');
export const cnHeaderAvatar = cnHeader('Avatar');

const HOMEPAGE = '/?autoscroll';

const Header: React.FC = React.memo(() => {
    return (
        <div className={cnHeaderWrapper}>
            <AppWrapper>
                <div className={cnHeader()}>
                    <ul className={cnHeaderMenu}>
                        <li className={cnHeaderBurger}>
                            <a href="#"><BurgerIcon white /></a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} href="#">About</a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} href="#">Projects</a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} href="#">Contacts</a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} href="#">Jobs</a>
                        </li>
                    </ul>
                    <div className={cnHeaderLogo}><Link href={HOMEPAGE}>Logo</Link></div>
                    <ul className={cnHeaderMenu}>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} target="_blank" title="Открыть профиль в телеграме" href="//t.me/avdeev_den">Tg</a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} target="_blank" title="Открыть профиль Вконтакте" href="//vk.com/booomka">Vk</a>
                        </li>
                        <li className={cnHeaderMenuItem}>
                            <a className={cnHeaderMenuLink} target="_blank" title="Открыть профиль в GitHub" href="//github.com/avdeevdenis">Gh</a>
                        </li>
                        <div className={cnHeaderAvatar}></div>
                    </ul>
                </div>
            </AppWrapper>
        </div>
    );
});

export default Header;
