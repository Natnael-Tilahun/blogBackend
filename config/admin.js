module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c4f08ee56daf00b73a8818835bea6d1e'),
  },
});
