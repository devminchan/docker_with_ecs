FROM node:10
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000