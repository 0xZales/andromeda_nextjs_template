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
      {
        name: "Pricing",
        url: "/pricing",
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
export const cta = {
  enable: true,
  title: "Get Andromeda Now",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas </br> Werat viverra id et aliquet. vulputate egestas sollicitudin.",
  button: {
    label: "Download The Theme",
    link: "https://themefisher.com/products/andromeda-light-nextjs"
  }
}
export const copyright ={
  "tag_manager_id": "",
  "contact_form_action": "#",
  "footer_content": "Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.",
  "copyright": "Designed By [Themefisher](https:www.themefisher.com) & Developed by [Rozales](https:www.themefisher.com)",
  "copyrightx": `Designed By <a href="https:www.themefisher.com" className='hover:text-primary'>Themefisher</a> & Developed by <a href="https://twitter.com/0xzales" className='hover:text-primary'>Rozales</a>`,
}


export const footerElement=[
  {
    title:'Socials',
    links:[
      {
        content:"info@andromeda.com",
        href:"mailto:info@andromeda.com"
      },
    ]
  },
  {
    title:'Quick Links',
    links:[
      {
        content:"About",
        href:"/about"
      },
      {
        content:"Blog",
        href:"/blog"
      },
      {
        content:"Terms & Conditions",
        href:"/terms"
      },
    ]
  },
  {
    title:'Location & Contact',
    links:[
      {
        content:"2118 Thornridge Cir. Syracuse, Connecticut ",
        href:""
      },
      {
        content:"35624",
        href:""
      },
      {
        content:"+887887998",
        href:"tel:+887887998"
      },
    ]
  },
  
]