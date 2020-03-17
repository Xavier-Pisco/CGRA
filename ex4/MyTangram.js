/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.initMaterials();
    }
    initMaterials(){

        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.3, 0.3, 0.3, 1);
        this.green.setDiffuse(111/255, 227/255, 0, 1.0);
        this.green.setSpecular(0, 0, 0, 1.0);
        this.green.setShininess(10.0);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(0.3, 0.3, 0.3, 1);
        this.yellow.setDiffuse(1, 1, 0, 1.0);
        this.yellow.setSpecular(0, 0, 0, 1.0);
        this.yellow.setShininess(10.0);

        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(0.3, 0.3, 0.3, 1);
        this.red.setDiffuse(1, 0, 0, 1.0);
        this.red.setSpecular(0, 0, 0, 1.0);
        this.red.setShininess(10.0);

        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.3, 0.3, 0.3, 1);
        this.purple.setDiffuse(142/255, 41/255, 163/255, 1.0);
        this.purple.setSpecular(0, 0, 0, 1.0);
        this.purple.setShininess(10.0);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(0.3, 0.3, 0.3, 1);
        this.orange.setDiffuse(255/255, 165/255, 0, 1.0);
        this.orange.setSpecular(0, 0, 0, 1.0);
        this.orange.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0.3, 0.3, 0.3, 1);
        this.blue.setDiffuse(4/255, 131/255, 255/255, 1.0);
        this.blue.setSpecular(0, 0, 0, 1.0)
        this.blue.setShininess(10.0);

        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(0.3, 0.3, 0.3, 1);
        this.pink.setDiffuse(255/255, 141/255, 161/255, 1.0);
        this.pink.setSpecular(0, 0, 0, 1.0)
        this.pink.setShininess(10.0);
    }
	display() {

        // ---- BEGIN Primitive drawing section
        let angle = Math.PI/4;
        let rot = [
            Math.cos(angle), Math.sin(angle), 0, 0,
            -Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        let tx = Math.sqrt(2)/2;
        let ty = Math.sqrt(2)/2;
        let tz = 0;

        let translate = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1
        ]

        this.scene.pushMatrix();
        this.scene.multMatrix(translate);
        this.scene.multMatrix(rot);
        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(1, -1, 1);
        this.parallelogram.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2), 2*Math.sqrt(2)-1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
		this.triangleSmall.updateTexCoords([
            0, 0,
            1/4, 1/4, 
			0, 1/2
        ]);
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangleSmall.updateTexCoords([
            1/4, 3/4,
            1/2, 1/2, 
            3/4, 3/4
        ]);
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.triangleBig.updateTexCoords( [
            0, 0,
            1/2, 1/2,
            1, 0
        ]);
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.triangleBig.updateTexCoords([
            1, 0,
            1/2, 1/2,
            1, 1
        ]);
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.updateTexCoords([
            1/2, 1,
            0, 1,
            0, 1/2
        ]);
        this.triangle.display();

        this.scene.popMatrix();
        // ---- END Primitive drawing section
	}
}