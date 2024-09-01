### SulatBaybayin Website
#### MPOP Reverse II

---
### Introduction
> This was the migration of `sulat baybayin` website from its `PHP` source to a `JavaScript` framework adaptation

---
### Packages
1. Vite
2. ReactJs
3. TailwindCSS
4. PostCSS
5. AutoPrefixer
6. @fortawesome/react-fontawesome
7. @fortawesome/free-solid-svg-icons
8. @fortawesome/free-brands-svg-icons

---
### Create a Vite Project
1. Run this code to your terminal `npm create vite@latest my-app` where my-app is your project name
2. Navigate to your project (`my-app`) using cd and run `npm install`
3. Other packages such as TailwindCSS are not installed, if you want, you may install it using `npm install tailwindcss postcss autoprefixer` those three packages are important too
4. In addition with the 3rd step, you also need to install the fortawesome packages if you want to use the fontawesome icons, just install the react-fontawesome and the related icons such as free-solid-svg-icons and/or free-brands-svg-icons for brand icons

---
### Start tailwind
1. You just need to execute `npx tailwindcss init` and modify the `tailwind.config.js` under the `content`, just add `"./index"` and `"./src/**/*.{js,jsx}"`.
2. Next is you need to go to `index.css` under the `src` folder, on the top add these three codes: `@tailwind base;` `@tailwind components;` and `@tailwind utilities;`
3. Next is you need to create a new file alongside with `tailwind.config.js` name it `postcss.config.js` and just copy and paste the code what's on my `postcss.config.js`
4. Lastly, go to `package.json` and remove the whole line: `type: "module",` it was under of the `version` sometimes.

---
### To start
> Just run `npm run dev` but you may also customize it, just rename the `dev` under `scripts` in `package.json` just like mine. If you use `start` just execute `npm start` but if not, `run` is required
