import styled from 'styled-components'

interface NavItemStyledProps {
  isActive: boolean
}

const NavItem = styled.li(({ isActive }: NavItemStyledProps) => `
  border-radius: 6px;
  cursor: default;
  font-weight: 100;
  display: inline-block;
  margin-right: 10px;
  padding: 5px 10px;

  ${(isActive)
    ? `
      background-color: #ffffff;
      color: #fabe90;
      font-size: 1.5rem;
    `
    : ''}

  a {
    text-decoration: none;
    color: #ffffff;
  }
`)

const Wrapper = styled.header`
  background-color: #fabe90;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  left: 0;
  margin-bottom: 40px;
  padding: 10px 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  .content {
    box-sizing: border-box;
    min-width: calc(970px - (35px * 2));
    margin: 0 auto;
    max-width: calc(1220px - (35px * 2));
    list-style: none;
    position: relative;
    _width: calc(991px - (35px * 2));

    img {
      position: absolute;
      top: -12px;
      right: 0;
      width: 125px;
    }

    .nav {
      padding: 0;
    }
  }
`

export { NavItem, Wrapper }