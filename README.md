# www

The source code for the [Sigma website](http://users.metropolia.fi/~linusw/public/web-tekniikat-ja-digitaalinen-media/Sigma/).

## Installation

Preqrequisites:
- Git and Git LFS
- Node.js and NPM

```bash
git clone https://github.com/Metropolia-Team-Sigma/www.git
git submodule init
npm i
npm start
```

## Usage

- `npm start` - Start the development server with default settings.
- `npm run deploy` - Deploy the site to an SFTP server. Set the environment variables exemplified in [.env.example](.env.example) before running this script.
