module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0af51741f691bca17c8594fe3d4269e4'),
  },
});
