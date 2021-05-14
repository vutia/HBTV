import styled, { css } from 'styled-components';

import Link from 'next/link';

export const Header = styled.header`
  position: ${({ url }) =>
    url === '/' || url === '/browse' ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  transition: all 0.5s;

  background: ${({ showBackground }) => (showBackground ? '#141414' : 'none')};
`;

export const Nav = styled.nav`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  position: relative;
  width: ${({ url }) => (url === '/browse' ? '11rem' : '20rem')};

  @media only screen and (max-width: 90.625em) {
    width: 15rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 12rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 10rem;
  }
`;

const NextLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

export const SignIn = styled(NextLink)`
  background-color: #e50914;
  display: inline-block;
  font-size: 1.6rem;
  padding: 0.7rem 1.7rem;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  align-self: start;
  margin-top: 0.7rem;

  @media only screen and (max-width: 90.625em) {
    margin-top: 0rem;
  }

  @media only screen and (max-width: 59.375em) {
    margin-top: -0.5rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  &.primary-nav {
    display: flex;
    gap: 4rem;
  }

  &.secondary-nav,
  &.menu {
    display: flex;
    align-items: center;
  }

  &.image {
    margin: 0.4rem 0.8rem;
  }
`;

export const Category = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 2rem;

  li {
    cursor: pointer;
    color: #e5e5e5;
    :hover {
      color: #b3b3b3;
    }
  }

  ${({ activeCategory }) => css`
    li: ${activeCategory === 'TV' ? 'first' : 'last'}-child {
      font-weight: 700;
      color: #fff;
    }
  `}
`;

export const Search = styled.div`
  position: relative;
  width: 25rem;

  @media screen and (max-width: 42.5em) {
    width: 15rem;
  }

  svg {
    fill: currentColor;
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    top: 5px;
    right: 5px;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.5s ease;
  }

  &.active {
    svg {
      transform: translateX(-214px);
    }

    input {
      opacity: 1;
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 1.4rem;
  outline: none;
  background: rgba(0, 0, 0, 0.85);
  border: solid 1px rgba(255, 255, 255, 0.85);
  box-sizing: border-box;
  padding: 0.7rem 1.4rem 0.7rem 4rem;
  width: 0%;
  color: #fff;
  opacity: 0;
  float: right;
  transition: ease width 0.5s, ease opacity 0.5s;
`;

export const Menu = styled.button`
  margin: 0 1rem 0 2.4rem;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  width: 3.6rem;
  height: 3.6rem;
  position: relative;

  &:hover {
    outline: none;
    ul {
      opacity: 1;
      transform: rotateX(0) translateX(-50%);
      visibility: visible;
    }

    & + .caret {
      transform: rotate(180deg);
    }
  }

  img {
    border-radius: 3px;
  }
`;

export const Caret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
  transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
`;

export const Dropdown = styled.ul`
  list-style: none;
  opacity: 0;
  position: absolute;
  top: 6rem;
  right: -10rem;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 1.28rem;
  border: 1px solid #69696979;
  min-width: 16rem;
  padding-bottom: 1.2rem;
  transform: rotateX(-90deg) translateX(-50%);
  transform-origin: top center;
  transition: all 0.1s 0.2s ease-in;

  ::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 7px 0 7px;
    border-color: #d3d3d3 transparent transparent transparent;
    transform: rotate(180deg) translate(-4.3rem, 2rem);
  }
`;

export const DropdownOptions = styled.li`
  display: flex;
  place-items: center;
  padding: 0.1rem 0.25rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  &.text {
    font-weight: 600;
    padding: 0.75rem;
  }
`;

// icon

export const SearchIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
);
