module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'yarn',
      args: 'start',
      cwd: '/home/hansluber/stressfuldev-CMS',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

