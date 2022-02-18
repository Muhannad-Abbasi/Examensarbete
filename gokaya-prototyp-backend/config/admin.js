module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '89f3f1c14aa0b25ef7d0fbaab884b824'),
  },
});
