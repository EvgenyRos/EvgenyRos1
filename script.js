document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const x = (e.clientX / window.innerWidth - 0.5) * 50; // Увеличьте значение для более сильного эффекта
    const y = (e.clientY / window.innerHeight - 0.5) * 50;


    layers.forEach(layer => {
        const depth = layer.dataset.depth || 0;
        const moveX = x * depth;
        const moveY = y * depth;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        function handleParallax(event) {
            const layers = document.querySelectorAll(".parallax-layer");
        
            layers.forEach((layer) => {
                const depth = layer.getAttribute("data-depth");
                const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.25;
                const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.25;
        
                layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
            function handleParallax(event) {
                const layers = document.querySelectorAll(".parallax-layer");
            
                layers.forEach((layer) => {
                    const depth = layer.getAttribute("data-depth");
                    const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.50;
                    const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.50;
            
                    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                });
                function handleParallax(event) {
                    const layers = document.querySelectorAll(".parallax-layer");
                
                    layers.forEach((layer) => {
                        const depth = layer.getAttribute("data-depth");
                        const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.90;
                        const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.90;
                
                        layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                    });
                    function handleParallax(event) {
                        const layers = document.querySelectorAll(".parallax-layer");
                    
                        layers.forEach((layer) => {
                            const depth = layer.getAttribute("data-depth");
                            const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.01;
                            const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.01;
                    
                            layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                        });
                    
                        // Окремий рух для кнопки
                        const buttonLayer = document.querySelector(".button-layer");
                        if (buttonLayer) {
                            const depth = buttonLayer.getAttribute("data-depth");
                            const moveX = (event.pageX - window.innerWidth / 2) * depth * 0.02; // Більший ефект
                            const moveY = (event.pageY - window.innerHeight / 2) * depth * 0.02;
                    
                            buttonLayer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
                        }
                    }
                    if (window.innerWidth > 768) { // Ефект працює тільки на екранах більше 768px
                        handleParallax(event);
                    }
                });
                }
