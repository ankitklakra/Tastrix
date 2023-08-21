import whatsapp from 'assets/widgets/whatsapp.png';
import telephone from 'assets/widgets/telephone.png';
import address from 'assets/widgets/address.png';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: whatsapp,
      altText: 'Whatsapp',
      title: 'Whatsapp',
      description:
        '+91 82694 15993',
      path:'https://api.whatsapp.com/send/?phone=918269415993&text=Hello+I+want+to+buy+Tastrix&type=phone_number&app_absent=0',
    },
    {
      id: 2,
      iconSrc: telephone,
      altText: 'Call us',
      title: 'Call us',
      description:
        '+91 82694 15993',
      path:'tel:(+91) 8269415993',
    },
    {
      id: 3,
      iconSrc: address,
      altText: 'Address',
      title: 'Address',
      description:
        "OCTA COMPUTERS AND SOFTWARES, Todi, Sheopur, Madhya Pradesh 476337",
      path:'https://goo.gl/maps/qkvt1E5Yc1ncX41aA',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
