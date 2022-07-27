import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} />
      <nav>
        <a href="">timer</a>

        <a href="/history">history</a>
      </nav>
    </HeaderContainer>
  );
}
