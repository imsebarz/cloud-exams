This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Validate the security update

Use Node 22.23.4 or a patched Node 24 release (24.22.1 or later).

```sh
npm ci
npm run lint
npm run build
npm test
npm audit
```

The tests start an isolated production server, disable Redis for that child process and verify the existing in-memory sync contract, malformed requests and normalized codes. They do not verify persistence against a real Redis service.

## Dokploy deployment

The versioned Dockerfile builds a standalone Next.js server with Node 22.23.4 pinned by digest. It runs as the Node user and excludes local environment files from the build context. Before deployment, select Dockerfile as the application's build type in Dokploy; the existing Nixpacks deployment will not automatically use this recipe. Keep the existing REDIS_URL runtime setting. The application listens on port 3000.

The runtime image starts Node directly and excludes the upstream npm, Corepack and Yarn installations. Package managers remain available in the builder.

Build and inspect the candidate before scheduling a production restart:

```sh
docker build -t cloud-exams-security-candidate .
```

The pull-request workflow validates the Node 22 build, lint, HTTP tests, dependency audit and Docker image build. A successful workflow does not deploy the application.
