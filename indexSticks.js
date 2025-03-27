function generateSticker() {
    let input = document.getElementById('upload');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let file = input.files[0];
    if (!file) return alert('Escolha uma imagem primeiro!');
    
    let img = new Image();
    img.onload = function() {
        canvas.width = 512;
        canvas.height = 512;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, 512, 512);
        
        canvas.toBlob(blob => {
            let url = URL.createObjectURL(blob);
            let link = document.getElementById('download');
            link.href = url;
            link.download = 'figurinha.webp';
            link.textContent = 'Baixar Figurinha';
            link.style.display = 'block';
        }, 'image/webp');
    };
    img.src = URL.createObjectURL(file);
}