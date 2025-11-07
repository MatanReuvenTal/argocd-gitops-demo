FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
LABEL authors="Matan"
COPY src/ ./src/
EXPOSE 3000
CMD ["node", "src/app.js"]


