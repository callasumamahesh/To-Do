

function post(){
    let text = document.getElementById('textarea').value;
    if (text === ' ' || text === ''){
        document.getElementById('message').style.display = 'block';
    }
    else{
        createPost();
        // document.getElementById('textarea').value = '';
    }
}

function createPost(){
    let text = document.getElementById('textarea').value;
    let section = document.createElement('section')
    let para = document.createElement('p')
    para.innerText = text
    let img1 = document.createElement('img')
    img1.src = './icons/edit.png'
    img1.style.width = '20px'
    img1.style.cursor = 'pointer'
    img1.style.marginRight = '10px'
    let img2 = document.createElement('img')
    img2.src = './icons/delete.png'
    img2.style.width = '20px'
    img2.style.cursor = 'pointer'
    section.append(para,img1,img2)
    section.style.marginTop = '1rem'
    section.style.display = 'flex';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    document.body.append(section)
    img2.addEventListener('click',()=>{
        section.remove()
    })
    img1.addEventListener('click',()=>{
        document.getElementById('textarea').value = para.innerText;
        section.remove()
    })
    document.getElementById('textarea').value = ''
}
