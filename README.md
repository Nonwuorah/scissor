# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Scissor

Brief is the new black, this is what inspires the team at Scissor. In today’s world, it’s important to keep things as short as possible, and this applies to more concepts than you may realize. From music, speeches, to wedding receptions, brief is the new black. Scissor is a simple tool which makes URLs as short as possible. Scissor thinks it can disrupt the URL shortening industry and give the likes of bit.ly and ow.ly a run for their money within 2 years.
Requirements And Implementation Guide:
- URL Shortening: Scissor allows users to shorten URLs by pasting a long URL into the Scissor platform and a shorter URL gets automatically generated. The shortened URL is designed to be as short as possible, making it easy to share on social media or through other channels.
- Custom URLs: Scissor also allows users to customize their shortened URLs. Users can choose their own custom domain name and customize the URL to reflect their brand or content. This feature is particularly useful for individuals or small businesses who want to create branded links for their 
- QR Code Generation: Scissor allows users to also generate QR codes for the shortened URLs. Users can download the QR code image and use it in their promotional materials or/and on their website. This feature will be implemented using a third-party QR code generator API, which can be integrated into the Scissor platform.
- Analytics: Scissor provides basic analytics that allow users to track their shortened URL's performance. Users can see how many clicks their shortened URL has received and where the clicks are coming from. This feature will be implemented using Firebase's built-in analytics feature.

Best Practices:
Build and deploy a scalable code base with proper code linting and formatting with Prettier and Eslint.
Ensure you use typescript with either Vuejs or React with necessary SEO in place.
You are required to build with either Firebase, Hasura or any backend technology that will allow you to store user data and carry out authentication.It is important to allow the user of Scissor to write content with markdown.
Form validation is important.
At least 2 unit tests and 3 component tests should be present in the codebase.


Deliverables:

Landing Page
Mobile solution (later)
Competitors’ Landing Pages

Cards to show details of their offerings.
Real-time input link to shorten a link.
Customer testimonials.

Owly’s trial approach.
Tiny’s card to shorten URLs.
Cuttly’s detailing...


Component Deliverables (Key features):

URL Shortening
Custom short URLs
QR code generation
Data Analytics (of generated URLs)


Landing Page approach:

Navigation (Login + Signup)
Hero
Explanation of what Scissors can do (component deliverables)  + number/social proof
Cards for pricing/details
Tinyurl’s card approach to shorten
FAQs
CTA to reinforce customer acquisition.
Footer


Section Copies:

Hero
Brief is the new black, come see!
Explanation of what Scissors can do (component deliverables)  + number/social proof
Join our 4M+ users to enjoy the ease, wonders of URL shortening & QR codes,  for business and personal use.
Cards for pricing/details
...
Tinyurl’s card approach to shorten
...
FAQs
Samihah
CTA to reinforce customer acquisition.
Join us today, blah blah blah
Footer


Landing Page approach:

Navigation (Login + Signup) - Samihah
Hero - Samihah
Explanation of what Scissors can do (component deliverables)  + number/social proof - Dotun
Cards for pricing/details - Dotun
Tinyurl’s card approach to shorten - Gozie
FAQs - Gozie
CTA to reinforce customer acquisition. - Dotun
Footer - Gozie


Hey guys, please let’s use AUTO-LAYOUT in all of our designing.


Further designing: 02/06/2023.

Features with chevron to show the details of what we are to do. 
Features shows url shortening, custom url and qr codes.
Only QR code routes to another page.
Login and sign up pages.  - Gozie
OnClick Sign-up button should route to an elaborate, comprehensive  listing of the Pricing details. A “Get started” button here will now lead to  where users can enter their details.
QR code page - a mini landing page on it own. E.g. Bitly’s. - Gozie
OnClick Get Started, it routes to where users can Register the details of  how they want their QR codes. Please note to create an input field to  specify the type of materials where QR codes will be used on.
Custom quotations page. E.g. Bitly’s. - Gozie
