module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    screen: {
      desktop: "1240px",
      mobile: "960px",
    },

    colors: {
      red: '#FC0000',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#454545',
      pink: '#FFC7C7',
      "gray-light": '#B4B4B4',
      "pink-light": '#FFF0F0',
      "pink-dark": '#FB5353',

    },

    boxShadow: {
      sm: '5px 7px 15px 2px rgba(0, 0, 0, 0.15)',
    },

    fontSize: {
      xs: ['16px',
        {
          lineHeight: '19px',
          letterSpacing: '-0.03em',
        }
      ],

      sm: ['16px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.03em',
        }
      ],

      md: ['18px',
        {
          lineHeight: '32px',
          letterSpacing: '0.04em',
        }
      ],

      lg: ['26px',
        {
          lineHeight: '43px',
          letterSpacing: '-0.03em',
        }
      ],

      xl: ['40px',
        {
          lineHeight: '53px',
          letterSpacing: '-0.03em',
        }
      ]

    },

    fontFamily: {
      // futura: 'Bellota, serif',
      // // futura: 'Futura Bk BT Book, serif',
      // playfair: 'Playfair Display, serif',
      montserrat: 'Montserrat, sans-serif',
      "montserrat-alternates":'Montserrat Alternates, sans-serif',
      raleway: 'Raleway, sans-serif',
      poppins: 'Poppins, sans-serif',
    },

    extend: {},
  },
  plugins: [],
}