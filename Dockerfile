FROM node:lts as dependencies
WORKDIR /mitchells-work
COPY package.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /mitchells-work
COPY . .
COPY --from=dependencies /mitchells-work/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /mitchells-work
ENV NODE_ENV production

COPY --from=builder /mitchells-work/public ./public
COPY --from=builder /mitchells-work/.next ./.next
COPY --from=builder /mitchells-work/node_modules ./node_modules
COPY --from=builder /mitchells-work/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]