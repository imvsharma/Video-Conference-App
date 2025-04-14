FROM node:23-slim

WORKDIR /usr/src/app

# Install dependencies early (for caching)
COPY package*.json ./
RUN npm install

# Copy only source code (mounted in docker-compose for hot reload)
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
