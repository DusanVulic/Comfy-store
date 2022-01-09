import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
//import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <div>
          <h3>checkout</h3>
          <p>
            Considering that this project is public and its very purpose is just
            for learning I didn't wanted to include real money transfer or any
            kind of online payment processing.
            <br /> Thank you very much.
          </p>

          <Link to="/" className="btn">
            back to home page
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  div {
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  h3 {
    margin-top: 2rem;
  }
  p {
    margin: 3rem 0 7rem;
    color: var(--clr-grey-5);
  }
`;
export default CheckoutPage;
