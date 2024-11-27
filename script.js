import { Live2DModel } from 'live2d-widget';

const canvas = document.getElementById('live2d-canvas');
const modelUrl = './assets/model.json';

// モデル読み込みと設定
let model;
Live2DModel.create({
    canvas: canvas,
    model: modelUrl,
    onLoad: (loadedModel) => {
        model = loadedModel;

        // モデルの初期配置を中央に
        model.x = canvas.width / 2;
        model.y = canvas.height / 2;
        model.anchor.set(0.5);

        // ウィンドウサイズ変更対応
        window.addEventListener('resize', () => {
            model.x = canvas.width / 2;
            model.y = canvas.height / 2;
        });

        // タップイベント設定
        canvas.addEventListener('click', () => {
            const motionIndex = Math.floor(Math.random() * 8) + 1; // 1～8のランダム値
            const motionFile = `./assets/motion/tap${motionIndex}.motion3.json`;
            model.motion(motionFile); // モーションを再生
        });
    },
});
