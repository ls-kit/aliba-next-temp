import {useState} from "react";
import { Nav, Tab } from "react-bootstrap";
import ShippingInformation from "./ShippingInformation";
import ProductDescription from "./ProductDescription";

const ProductDetailsTab = ({id}) => {
    console.log(id)
    const [activeTab, setActiveTab] = useState("shipping");

    const handleTabSelect = (tabKey) => {
        setActiveTab(tabKey);
    };
    return (
        <section className="tab-product m-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                            <Nav variant="tabs" className="nav-material" id="top-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="shipping">
                                        <i className="icofont icofont-ui-home"></i>Shipping And Delivery
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="additional">
                                        <i className="icofont icofont-man-in-glasses"></i>Additional Information
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seller">
                                        <i className="icofont icofont-contacts"></i>Seller Info
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="description">
                                        <i className="icofont icofont-contacts"></i>Description
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="nav-material" id="top-tabContent">
                                <Tab.Pane eventKey="shipping">
                                    {/* Shipping and Delivery content */}
                                    <ShippingInformation/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="additional">
                                    {/* Additional Information content */}
                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="seller">
                                    {/* Seller Info content */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="description">
                                    {/* Description content */}
                                    <ProductDescription id={id} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsTab;
