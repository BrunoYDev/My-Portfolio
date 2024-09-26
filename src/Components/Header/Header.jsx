import { useState } from "react";
import {
  Container,
  Figure,
  Heading,
  ImagePic,
  Navbar,
  NavbarItem,
  StyledLink,
  Title,
} from "./style";
import profilePic from "../../assets/profile.jpg";

function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <Container>
        <Heading>
        <Figure>
          <ImagePic src={profilePic} alt="Profile Pic" />
        </Figure>
        <Title>Bruno Rodrigues Garcia</Title>
        </Heading>
        

        <Navbar>

          {["Home", "More", "Contacts"].map((item, index) => (

            <NavbarItem
              key={index}
              active={activeItem === index}
              onClick={() => handleItemClick(index)}
            >
              <StyledLink to={item === 'Home' ? '/' : `/${item}`}>{item}</StyledLink>

            </NavbarItem>
          ))}

        </Navbar>
      </Container>
    </>
  );
}

export default Header;
