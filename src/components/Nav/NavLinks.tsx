import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Location",
      Link: "/",
    },
    {
      name: "Blog",
      Link: "/",
    },
    {
      name: "Testimonials",
      Link: "/",
    },
    {
      name: "Contact",
      Link: "/",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary">
          <a href={link.Link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
