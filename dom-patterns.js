function showPattern() {
    const colorsArr = ['red','purple','blue','green','yellow','magenta','pink','navy'];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500; 
    let height = 500; 

    while (width > 25) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width +'px'; 
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];
        newDiv.style.borderRadius = '50%';

        document.body.append(newDiv);
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}
