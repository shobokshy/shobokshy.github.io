/** @jsx jsx */ import { jsx, Global } from '@emotion/core'
import { GitHub, Linkedin, Instagram, Music } from 'react-feather';
import React from 'react';

const SocialList: React.FunctionComponent = () => (
    <React.Fragment>
        <ul
            css={{
                listStyleType: 'none',
                padding: '10px 0px',
                '& > li': {
                    display: 'inline-block',
                    padding: '0px 10px'
                },
                '& > li:first-child': {
                    paddingLeft: 0
                }
            }}
        >
            <li>
                <a target='_blank' href='https://github.com/shobokshy'>
                    <GitHub size={30} color='#333' className="icon social-github" />
                </a>
            </li>
            <li>
                <a target='_blank' href='https://www.linkedin.com/in/shobokshy/'>
                    <Linkedin size={30} color='#333' className="icon social-linkedin" />
                </a>
            </li>
            <li>
                <a target='_blank' href='https://www.instagram.com/shobokshy/'>
                    <Instagram size={30} color='#333' className="icon social-instagram" />
                </a>
            </li>
            <li>
                <a target='_blank' href='https://soundcloud.com/shobokshy'>
                    <Music size={30} color='#333' className="icon social-music" />
                </a>
            </li>
        </ul>
        <Global
            styles={{
                '.icon': {transition: 'all .2s ease-in'},
                '.social-github:hover': {stroke: '#6e5494'},
                '.social-linkedin:hover': {stroke: '#0077b5'},
                '.social-instagram:hover': {stroke: '#e1306c'},
                '.social-music:hover': {stroke: '#1db954'}
            }}
        />
    </React.Fragment>

    
)

export default SocialList