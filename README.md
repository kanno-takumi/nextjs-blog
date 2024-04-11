This is my portfolio and blog.


## borderの場所を探してる index.jsで使用しているutilstyls.cardsBox? -webkit-scrollbar


## firebaseからの写真の読み取り&写真の保存→cafelogを参考に
## circleではなくsquareにしたい→utilStyles.borderCircle=util.module.borderCircle
homeだけでなくcard/post=true/falseのpropsを作成してsquare切り替えるか、post用で新しいImageを作り直すかどちらか。
layout.js内layout.module.css .headerでalign-item:centerしてるから真ん中になってる。imagepathも注意

## layout.jsのコンポーネントをすべてのページで利用している。条件をつけてページごとにみやすい工夫がされているが、場合に応じて使わない選択肢もある。

Cafelog firebase.jsの105行目 写真を取得(写真のパスを取得)
どこかでgetImagePathを呼び出しているはず。→components/cafecard/cafeimage.jsで呼び出している。
そこでは、CafeImageという関数(引数props)を定義している。どこかで呼び出している
→cafecard/cafecard.js
→pages/index.js 37行　10~21行目も

59行目 addcafedataメソッド setDocでイメージのパスを保存している

追加にはpopup/Modalcontentが関係している。
32行目 imageUpload→../../api/upload　ここが本質っぽい。

まずは取得できるところから。