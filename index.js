(function() {

    glUtils.SL.init({ callback: function() { main(); } });

    function main() {

        var canvas = document.getElementById("glcanvas");
        // var canvas2 = document.getElementById("glcanvas2");
        var gl = glUtils.checkWebGL(canvas);
        // var gl2 = glUtils.checkWebGL(canvas2);

        window.addEventListener('resize', resizer);

        var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
        var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
        var program = glUtils.createProgram(gl, vertexShader, fragmentShader);

        var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
        var program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);

        var vertexShader3 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v3.vertex);
        var program3 = glUtils.createProgram(gl, vertexShader3, fragmentShader);

        resizer();

        //kubus
        var kubus = ([
            //BAWAH
            -0.3, -0.8, 0.7, 255, 255, 255,
            0.4, -0.8, 0.7, 255, 255, 255,
            0.4, -0.8, 0.7, 255, 255, 255,
            0.4, -0.8, -0.6, 255, 255, 255,
            0.4, -0.8, -0.6, 255, 255, 255, -0.3, -0.8, -0.6, 255, 255, 255, -0.3, -0.8, -0.6, 255, 255, 255, -0.3, -0.8, 0.7, 255, 255, 255,
            //ATAS
            -0.3, 0.6, 0.7, 255, 255, 255,
            0.4, 0.6, 0.7, 255, 255, 255,
            0.4, 0.6, 0.7, 255, 255, 255,
            0.4, 0.6, -0.6, 255, 255, 255,
            0.4, 0.6, -0.6, 255, 255, 255, -0.3, 0.6, -0.6, 255, 255, 255, -0.3, 0.6, -0.6, 255, 255, 255, -0.3, 0.6, 0.7, 255, 255, 255,
            //BELAKANG
            -0.3, -0.8, 0.7, 255, 255, 255, -0.3, 0.6, 0.7, 255, 255, 255,
            0.4, -0.8, 0.7, 255, 255, 255,
            0.4, 0.6, 0.7, 255, 255, 255,
            //DEPAN
            0.4, -0.8, -0.6, 255, 255, 255,
            0.4, 0.6, -0.6, 255, 255, 255, -0.3, -0.8, -0.6, 255, 255, 255, -0.3, 0.6, -0.6, 255, 255, 255
        ]);

        var triangleVertices2 = [
            // x, y,      r, g, b
            -0.3, 0.0, 1.0, 0.0, 0.0, -0.3, 0.4, 1.0, 0.0, 0.0,
            0.3, 0.0, 1.0, 1.0, 1.0,
            0.3, 0.4, 1.0, 1.0, 1.0, -0.3, 0.4, 1.0, 1.0, 1.0,
            0.3, 0.0, 1.0, 1.0, 1.0, -0.1, 0.0, 1.0, 1.0, 1.0, -0.1, -0.8, 1.0, 1.0, 1.0,
            0.1, -0.8, 1.0, 1.0, 1.0, -0.1, 0.0, 1.0, 1.0, 1.0,
            0.1, 0.0, 1.0, 1.0, 1.0,
            0.1, -0.8, 1.0, 1.0, 1.0
        ];

        function drawShapes(type, vertices, n) {
            var triangleVertexBufferObject = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);

            var vPosition = gl.getAttribLocation(program, 'vPosition');
            var vColor = gl.getAttribLocation(program, 'vColor');

            gl.vertexAttribPointer(
                vPosition, // variabel yang memegang posisi attribute di shader
                2, // jumlah elemen per atribut
                gl.FLOAT, // tipe data atribut
                gl.FALSE,
                5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex 
                0 // offset dari posisi elemen di array
            );
            gl.vertexAttribPointer(
                vColor,
                3,
                gl.FLOAT,
                gl.FALSE,
                5 * Float32Array.BYTES_PER_ELEMENT,
                2 * Float32Array.BYTES_PER_ELEMENT
            );
            gl.enableVertexAttribArray(vPosition);
            gl.enableVertexAttribArray(vColor);

            var vPosition = gl.getAttribLocation(program, 'vPosition');
            var vColor = gl.getAttribLocation(program, 'vColor');
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            gl.drawArrays(type, 0, n);
        }

        function drawShapes2(type, vertices, n) {
            var triangleVertexBufferObject = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);

            var vPosition = gl.getAttribLocation(program2, 'vPosition');
            var vColor = gl.getAttribLocation(program2, 'vColor');

            gl.vertexAttribPointer(
                vPosition, // variabel yang memegang posisi attribute di shader
                2, // jumlah elemen per atribut
                gl.FLOAT, // tipe data atribut
                gl.FALSE,
                5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex 
                0 // offset dari posisi elemen di array
            );
            gl.vertexAttribPointer(
                vColor,
                3,
                gl.FLOAT,
                gl.FALSE,
                5 * Float32Array.BYTES_PER_ELEMENT,
                2 * Float32Array.BYTES_PER_ELEMENT
            );
            gl.enableVertexAttribArray(vPosition);
            gl.enableVertexAttribArray(vColor);

            var vPosition = gl.getAttribLocation(program2, 'vPosition');
            var vColor = gl.getAttribLocation(program2, 'vColor');
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
            gl.drawArrays(type, 0, n);
        }

        var translation = gl.getUniformLocation(program, 'translation');
        gl.uniform3f(translation, 0.0, 0.0, 0.0);
        // var translation2 = gl2.getUniformLocation(program2, 'translation2');
        // gl2.uniform3f(translation2, 0.0, 0.0, 0.0);

        function resizer() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            // canvas2.width = window.innerWidth;
            // canvas2.height = window.innerHeight;
            // gl2.viewport(0, 0, gl2.canvas2.width, gl2.canvas2.height);
            // draw();
        }

        var thetaLocation = gl.getUniformLocation(program, 'theta');
        var theta = 0.0;

        function render() {

            gl.useProgram(program);
            // Bersihkan layar jadi hitam
            gl.clearColor(0.0, 0.0, 0.0, 1.0);

            // Bersihkan buffernya canvas
            gl.clear(gl.COLOR_BUFFER_BIT);

            theta += 0.0069;
            gl.uniform1f(thetaLocation, theta);

            drawShapes(gl.LINE_LOOP, linesVertices, 8);
            requestAnimationFrame(render);
        };
        render();

        var scaleXLocation = gl.getUniformLocation(program2, 'scaleX');
        var scaleYLocation = gl.getUniformLocation(program2, 'scaleY');
        var scaleX = 1.0;
        var scaleY = 1.0;
        var melebar = 1;

        function render2() {

            gl.useProgram(program2);

            if (scaleX >= 1) melebar = -1;
            else if (scaleX <= -1) melebar = 1;
            scaleX += 0.0069 * melebar;
            gl.uniform1f(scaleXLocation, scaleX);
            gl.uniform1f(scaleYLocation, scaleY);

            drawShapes2(gl.TRIANGLES, triangleVertices2, 12);
            requestAnimationFrame(render2);
        };
        render2();


    }
})();