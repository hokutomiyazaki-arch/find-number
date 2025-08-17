# 🎯 Speed Touch Game / スピードタッチゲーム

A fast-paced number/alphabet touching game where players tap items in sequential order as quickly as possible. Test your speed, concentration, and reflexes!

数字やアルファベットを順番にタッチして消していく、スピードと集中力を試すゲームです。

![Game Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎮 Demo / デモ

[Play the Game](https://your-username.github.io/speed-touch-game/) *(Replace with your actual GitHub Pages URL)*

## ✨ Features / 機能

### 🎯 Core Gameplay / 基本機能
- **Sequential Tapping**: Tap numbers (1-40) or letters (A-Z and beyond) in order
- **Timer System**: Real-time elapsed time display
- **Sound Effects**: Different sounds for correct/incorrect taps and game completion
- **Smooth Animations**: Appearing and disappearing effects for visual feedback

### ⚙️ Customization Options / カスタマイズ
- **Item Count**: Choose between 20, 30, or 40 items
- **Game Rounds**: Play 10, 15, or 20 consecutive games
- **Item Size**: Small, Medium, or Large display options
- **Game Mode**: Numbers or Alphabet mode

### 📊 Score Management / スコア管理
- **Best Score Tracking**: Separate records for each combination of settings
- **Average Time Calculation**: Track your performance across multiple rounds
- **Persistent Storage**: Scores are saved in browser's local storage
- **Category-based Records**: Different records for 20/30/40 items and number/alphabet modes

### 🎨 Visual Features / ビジュアル
- **Random Colors**: Each item appears in a unique random color
- **No Overlap**: Smart positioning algorithm prevents items from overlapping
- **Gradient Backgrounds**: Beautiful gradient designs for menu and game areas
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### 🔧 Additional Features / その他の機能
- **Fullscreen Mode**: Immersive gaming experience
- **Quit Button**: Exit game mid-session and return to menu
- **Mobile Optimized**: Touch-friendly interface with prevented scrolling
- **PWA Ready**: Can be installed as a web app on mobile devices

## 🚀 Getting Started / 使い方

### Prerequisites / 必要なもの
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser

### Installation / インストール

1. **Clone the repository / リポジトリをクローン**
```bash
git clone https://github.com/your-username/speed-touch-game.git
cd speed-touch-game
```

2. **Open the game / ゲームを開く**
- Simply open `index.html` in your web browser
- Or set up a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve
```

3. **Deploy to GitHub Pages / GitHub Pagesにデプロイ**
```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages in repository settings
# Select source: Deploy from branch (main)
```

## 🎯 How to Play / 遊び方

1. **Configure Settings / 設定を選択**
   - Select number of items (20/30/40)
   - Choose game rounds (10/15/20)
   - Pick item size (Small/Medium/Large)
   - Select mode (Numbers/Alphabet)

2. **Start Game / ゲーム開始**
   - Click "ゲームスタート！" button
   - Items appear randomly on screen

3. **Play / プレイ**
   - Tap/click items in sequential order (1→2→3... or A→B→C...)
   - Correct taps make items disappear with a success sound
   - Wrong taps shake the item with an error sound

4. **Complete / 完了**
   - Game ends when all items are cleared
   - View your time, average, and best record
   - Continue to next round or return to menu

## 🛠️ Technical Details / 技術仕様

### Browser Compatibility / ブラウザ対応
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Technologies Used / 使用技術
- **HTML5**: Semantic markup and canvas elements
- **CSS3**: Animations, gradients, flexbox layout
- **JavaScript**: ES6+, Web Audio API for sounds
- **Local Storage**: For persistent score tracking

### Performance Optimizations / パフォーマンス最適化
- Efficient collision detection algorithm
- RequestAnimationFrame for smooth animations
- Optimized touch event handling
- Minimal DOM manipulation

## 📱 Mobile Support / モバイル対応

- **Touch Optimized**: Large touch targets and gesture support
- **Viewport Locked**: Prevents accidental zooming
- **Full Screen**: Removes address bar for maximum play area
- **PWA Manifest**: Can be installed as a standalone app

## 🎨 Customization / カスタマイズ

### Modify Game Settings / ゲーム設定の変更
Edit the following in the JavaScript section:
```javascript
// Change default settings
let gameSettings = {
    count: 20,      // Default number count
    rounds: 10,     // Default round count
    size: 'medium', // Default size
    mode: 'numbers' // Default mode
};
```

### Styling / スタイル変更
Modify CSS variables for different themes:
```css
/* Change color scheme */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Adjust item sizes */
.size-small { width: 50px; height: 50px; }
.size-medium { width: 70px; height: 70px; }
.size-large { width: 90px; height: 90px; }
```

## 🤝 Contributing / 貢献

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License / ライセンス

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments / 謝辞

- Inspired by classic number touch games
- Sound effects generated using Web Audio API
- Gradient designs from modern UI trends

## 📞 Contact / 連絡先

Your Name - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/your-username/speed-touch-game](https://github.com/your-username/speed-touch-game)

---

**Enjoy the game! / ゲームを楽しんでください！** 🎮✨
