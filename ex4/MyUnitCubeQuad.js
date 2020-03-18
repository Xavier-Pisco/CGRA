class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.quad = new MyQuad(scene);

        this.topTexture = new CGFtexture(scene, 'images/mineTop.png');
        this.botTexture = new CGFtexture(scene, 'images/mineBottom.png');
        this.sideTexture = new CGFtexture(scene, 'images/mineSide.png');
        this.material = new CGFappearance(scene);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.material.setTexture(this.sideTexture);
        this.material.apply();
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();


        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.quad.display();


        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.material.setTexture(this.topTexture);
        this.material.apply();
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.material.setTexture(this.botTexture);
        this.material.apply();
        this.quad.display();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
    }
}