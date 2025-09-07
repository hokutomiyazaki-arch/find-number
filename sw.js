// Service Worker バージョン管理
const CACHE_NAME = 'speed-touch-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './FNT512.png',
  './FNT512-transparent.png'
];

// インストールイベント
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // 各ファイルを個別にキャッシュし、エラーをスキップ
        return Promise.all(
          urlsToCache.map(url => {
            return cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
              // エラーが発生してもインストールは続行
              return Promise.resolve();
            });
          })
        );
      })
  );
  // 即座にアクティブ化
  self.skipWaiting();
});

// アクティベートイベント
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // すぐに有効化
  self.clients.claim();
});

// フェッチイベント
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // キャッシュがあればそれを返す
        if (response) {
          return response;
        }
        
        // キャッシュがなければネットワークから取得
        return fetch(event.request).then(response => {
          // 無効なレスポンスはキャッシュしない
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // レスポンスをクローンしてキャッシュに保存
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(error => {
          console.error('Fetch failed:', error);
          // オフライン時のフォールバック
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
