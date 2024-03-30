module.exports =  {
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
    images: {
      domains: ['firebasestorage.googleapis.com'], // 画像のホスト名を追加
    },
  }