import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../scss/main.scss"
import logo from '../content/images/ra_logo.svg';

export default ({ children }) => {
  const [menuStatus, menuChange] = useState(false)

  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const HeaderCont = styled.div`
    background: #171717;
    
    @media (max-width: 767px) {
      .nav-cont {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        right: 0;
        background-color: #171717;
        z-index: 2;
        transform: translateX(100%);
        transition: var(--transMed);
        padding: 4rem 2rem;

        ul {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: flex-start;
        }
      }

      .menu-open {
        position: relative;
        z-index: 2;

        .nav-cont {
          transform: translateX(0%);
        }
      }

      .header-cont {
        button {
          z-index: 3;
          font-size: 1rem;
          color: #fff;
        }
      }
    }
    
    .header-logo {
      max-width: 3.5rem;
    }

    .header-cont {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 2rem;
      background-color: #171717;
      max-width: 1080px;
      margin: 0 auto;
      

      .logo-cont {
        display: block;

        a {
          display: block;

          &:hover {
            // color: var(--primaryColor);
          }
        }

        h2 {
          margin: 0;
          font-size: 1.5rem;

          @media (min-width: 768px) {
            font-size: 1.75rem;
          }
        }
      }

      @media (min-width: 768px) {
        button {
          display: none;
        }
      }
      
      @media (max-width: 768px) {
        .nav-cont ul li a {
          font-size: 2rem;
          font-weight: 300;
        }
      }
      .nav-cont {
        ul {
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;

          li {
            padding-left: 0;
            margin-top: .5rem;
            margin-bottom: .5rem;
            font-size: 1.15rem;
          }
        }

        @media (min-width: 768px) {
          ul {
            align-items: center;
            li {
              padding-left: 2rem;
              justify-content: flex-end;
            }
          }
        }
      }
    }
  `

  return (
    <HeaderCont className="header">
      <div className={`${menuStatus ? "menu-open" : "menu-closed"}`}>
        <header className="header-cont">
          <div className="logo-cont">
            <Link to="/">
              <img className="header-logo" src={logo}/>
            </Link>
          </div>
          <button className="btn" onClick={() => menuChange(!menuStatus)}>
            Menu
          </button>
          <nav className="nav-cont">
            <ul>
              <ListLink to="/author">Author</ListLink>
              <ListLink to="/updates/">Updates</ListLink>
              <ListLink to="/blog/">Blog</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
          </nav>
        </header>
      </div>
    </HeaderCont>
  )
}
