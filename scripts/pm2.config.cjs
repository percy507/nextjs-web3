let pm2Env = process.env.PM2_ENV;

module.exports = {
  apps: [
    {
      name: `myapp-${pm2Env}`,
      script: 'pnpm',
      args: `start:${pm2Env}`,
      cwd: './',

      watch: false,
      // watch_delay: 1000,
      // ignore_watch: ['node_modules', '.next', 'logs'],
      node_args: '--harmony',
      max_memory_restart: '500M',

      // logs
      out_file: `./logs/normal.log`,
      error_file: `./logs/error.log`,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
