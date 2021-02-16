'use strict';
/**
 * Three.jsを学ぶのに良いサイト
 * https://threejs.org/
 * https://developer.mozilla.org/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
 * https://ics.media/tutorial-three/
 * http://www.mwsoft.jp/programming/webgl/geometry.html
 */

export const triangleFunction = () => {
    const canvasWidth = innerWidth;
    const canvasHeight = innerHeight;

    //レンダラーの設定
    const renderer = new THREE.WebGLRenderer(
        {
            antialias: true,
            alpha:true
        }
    );
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0xffffff, 0);
    document.querySelector('#triangleLoad').appendChild(renderer.domElement);

    //シーンの設定
    const scene = new THREE.Scene();

    //カメラの設定
    const camera = new THREE.PerspectiveCamera(70, canvasWidth / canvasHeight);
    camera.position.z = 50;
    scene.add(camera);

    //三角錐
    //ジオメトリの作成（シェイプの作成）
    const geometry = new THREE.ConeGeometry(8, 16, 3)
    //ジオメトリの作成：マテリアル（表面を覆うもの）
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00,wireframe:true });
    //ジオメトリの作成：メッシュ（マテリアルをシェイプに適用する）
    const cone = new THREE.Mesh(geometry, material);
    //ジオメトリの作成：シーンに適用
    scene.add(cone);

    //テキスト
    /*const loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
        const geometry2 = new THREE.TextGeometry('Now Loading...', {
            size: 100,
            font
        })
    });
    const material2 = new THREE.MeshLambertMaterial({ color: 0x00886, wireframe: false })
    const mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);*/

    //レンダリング
    const render = () => {
        requestAnimationFrame(render);
        cone.rotation.x += 0.003;
        cone.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    render();
}