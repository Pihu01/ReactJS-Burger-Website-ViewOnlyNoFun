import React from "react";
const Contact = () => {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Type Your E-Mail" />
        <textarea placeholder="Write here..."></textarea>
        <input type="submit" value="BOOK" />
      </form>
    </div>
  );
};

export default Contact;
