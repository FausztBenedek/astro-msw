This project demonstrates a problem when trying to use [astro](https://astro.build/) with [msw](https://mswjs.io/).

When starting the service worker of msw, the following error message is shown:

```
Uncaught SyntaxError: The requested module '/node_modules/whatwg-url/lib/public-api.js?v=baa2d698' does not provide an export named 'default' (at index.mjs?v=baa2d698:4:8)
```

To reproduce:
1. Start this mini project with `yarn start`
2. Open [http://localhost:3000/ac/next/home](http://localhost:3000/ac/next/home)
3. Open the devtools, and in the console the error message should be visible