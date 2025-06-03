import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Appbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children } : LayoutProps ) => {

    return(

        <div className="main">

            <div>
                <Appbar />

                <Container>
                    <Row className="mt-5">
                        <Col>
                            { children }
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>

    );

}

export default Layout;