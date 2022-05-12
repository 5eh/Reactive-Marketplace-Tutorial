import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Architecto facilis recusandae aspernatur laboriosam ut maiores.",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Ethereum",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Architecto facilis recusandae aspernatur laboriosam ut maiores.",
    icon: "ri-coin-line",
  },
  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Architecto facilis recusandae aspernatur laboriosam ut maiores.",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "Doge",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Architecto facilis recusandae aspernatur laboriosam ut maiores.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 class="text-light"> Connect your wallet </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit autem fugit, at dolorem soluta eligendi.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
