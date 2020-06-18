import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => {
  const menuItems = state.theme.menu;
  const areItemsEven = menuItems.length % 2 == 0;

  return (
    <Navigation className="use-middle">
      <List className={areItemsEven ? "use-middle" : ""}>
        {menuItems.map(([label, link], i) => {
          const isCurrentPage = state.router.link === link;
          return (
            <li
              key={link}
              className={
                areItemsEven && i === menuItems.length / 2 ? "is-middle" : ""
              }
            >
              <Link
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </List>
    </Navigation>
  );
};

const Navigation = styled.nav`
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    width: 1px;
    height: 100%;
    background: #ffffff;
  }

  @media (max-width: 480px) {
    &.use-middle:after {
      display: none;
    }
  }
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
  border: solid 1px #ffffff;
  border-radius: 4px;

  li {
    padding-left: 0;
    border-left: solid 1px #ffffff;

    &:first-of-type {
      border-left: 0;
    }

    &.is-middle {
      border-left: 0;
    }

    a {
      display: block;
      min-width: 7.5rem;
      height: 2.75rem;
      line-height: 2.75rem;
      padding: 0 1.25rem 0 1.45rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-size: 0.8rem;
      border-bottom: 0;

      &:hover {
        background-color: rgba(255, 255, 255, 0.075);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.175);
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    min-width: 10rem;
    max-width: 100%;

    li {
      border-left: 0;
      border-top: solid 1px #ffffff;

      &:first-child {
        border-top: 0;
      }

      a {
        height: 3rem;
        line-height: 3rem;
        min-width: 0;
        width: 100%;
      }
    }
  }
`;

export default connect(Nav);
