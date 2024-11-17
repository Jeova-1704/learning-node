# Etapa 1: configuração de build
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: configuração de produção
FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]