import Footer2 from "./footer";
import Navbar2 from "./navbar";
import Container from '@mui/material/Container';

export default function MainLayOut({children}) {
    return (
      <Container maxWidth='xl' className="p-0">
      <Navbar2/>{children}<Footer2/>
      </Container>
    )
  }
  