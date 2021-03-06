import React from 'react';
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css';

interface PageHeaderProps
{
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) =>
{
    return(
        <div id="page-header">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/"><img src={backIcon} alt="Voltar"/></Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>
                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p> /*Só executa o da direita se o primeiro for true. Posso fazer vários em sequência*/ }
                    {props.children}
                </div>
            </header>          
        </div>
    );
}

export default PageHeader;