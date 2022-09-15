FROM node:15.13-alpine
WORKDIR /UITP-PETFRIEND-FRONTEND-DEV_sase
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
