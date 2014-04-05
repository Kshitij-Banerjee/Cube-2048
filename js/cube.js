function create_outer_cube(cube_dim) {
    cube_geo = new THREE.CubeGeometry(cube_dim, cube_dim, cube_dim);
    cube_mat = new THREE.MeshBasicMaterial({ color: 0x589768, opacity: 0.1, transparent: true });
    return new THREE.Mesh(cube_geo, cube_mat);
}

function create_inner_cube(cube_dim) {
    var offset = 10;

    cube_dim -= offset;
    cube_geo = new THREE.CubeGeometry(cube_dim, cube_dim, cube_dim);
    cube_mat = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.3, transparent: true });
    return new THREE.Mesh(cube_geo, cube_mat);
}


function bind_keyboard_keys() {

    var offset = 0.01;
    var angle = 180;

    function ondownarrow() {
        for (var i = 0 ; i < angle; i++) {
            cube_group.rotation.x -= offset;
            renderer.render(scene, camera);
        }
    }

    function onuparrow() {
        for (var i = 0 ; i < angle; i++) {
            cube_group.rotation.x += offset;
            cube_group.animation.update();
            renderer.render(scene, camera);
        }
    }

    function onleftarrow() {
        for (var i = 0 ; i < angle; i++) {
            cube_group.rotation.z += offset;
            renderer.render(scene, camera);
        }
    }

    function onrightarrow() {
        for (var i = 0 ; i < angle; i++) {
            cube_group.rotation.z -= offset;
            renderer.render(scene, camera);
        }
    }

    KeyboardJS.on('down arrow', ondownarrow);
    KeyboardJS.on('up arrow', onuparrow );
    KeyboardJS.on('left arrow', onleftarrow);
    KeyboardJS.on('right arrow', onrightarrow);
}
