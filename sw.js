const CACHE_NAME = 'speed-touch-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/FNT512.png',
  '/FNT512-transparent.png',
  '/manifest.json'
];

// インストール時にキャッシュを作成
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache error:', err);
      })
  );
  // 即座にアクティベート
  self.skipWaiting();
});

// アクティベート時に古いキャッシュを削除
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
  // すぐに制御を開始
  self.clients.claim();
});

// フェッチイベントでキャッシュを使用
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
          // 正常なレスポンスでない場合はそのまま返す
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
        });
      })
      .catch(() => {
        // オフライン時のフォールバック
        return new Response('オフラインです。インターネット接続を確認してください。');
      })
  );
});

// プッシュ通知（将来的な拡張用）
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Speed Touchで遊びましょう！',
    icon: '/FNT512.png',
    badge: '/FNT512.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Speed Touch', options)
  );
});

// バックグラウンド同期（将来的な拡張用）
self.addEventListener('sync', event => {
  if (event.tag === 'sync-scores') {
    event.waitUntil(syncScores());
  }
});

async function syncScores() {
  // スコアの同期処理（将来的に実装）
  console.log('Syncing scores...');
}
