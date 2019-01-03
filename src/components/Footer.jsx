import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 22px 20px;
  background: var(--color-brand-1);
  color: white;
  text-align: center;
  button: blue;
`


const Footer = () => (
  <FooterStyle>
    <input placeholder="edit-field-feedback-0-value" type="feedback" id="edit-field-feedback-0-value" 
    name="field_feedback[0][value]" value="" size="60" maxlength="254" placeholder="Give us a feedback" 
    class="form-feedback required" required="required" aria-required="true"></input>
    <input placeholder="edit-submit" type="submit" id="edit-submit" name="op" value="Send" 
    class="button button--primary js-form-submit form-submit"></input>
    <p>&copy; 2018 Delish</p>
  </FooterStyle>
);

export default Footer;
