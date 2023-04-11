export const headerLinks: {name:string,url:string,hasChildren?:boolean,children?:{name:string,url:string}[]}[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "/posts",
  },
  {
    name: "Pages",
    url: "",
    hasChildren: true,
    children: [
      {
        name: "Elements",
        url: "/elements",
      },
      {
        name: "Terms & Conditions",
        url: "/terms-policy",
      },
    ],
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
export const logo = {
  title: "Andromeda Light Nextjs",
  base_url: "/",
  favicon: "/images/favicon.png",
  logo: "/images/logo.svg",
  logo_width: 240,
  logo_height: 34,
  logo_text: "Andromeda",
};
