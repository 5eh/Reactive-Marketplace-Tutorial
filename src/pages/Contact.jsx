import React, { useRef } from "react";
import { FormGroup } from "reactstrap";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                labore, assumenda consequuntur itaque quae iusto! Dolorem velit
                impedit eaque qui odio nihil cum, eveniet temporibus est nostrum
                tempore delectus similique doloribus. Autem enim optio
                temporibus eveniet voluptatibus nihil animi illum.{" "}
              </p>
              <div className="contact">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                    />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Subject" ref={subjectRef} />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Message here"
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      background:
                        "linear-gradient(-45deg, #e250e5, #4b50e6, #e250e5, #4b50e6)",
                      color: "#fff",
                      marginTop: "20px",
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
