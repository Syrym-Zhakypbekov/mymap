console.log('test')


function test(){
    document.body.querySelector('div.container-fluid.aa-footer').remove()
    document.body.querySelector('div.container-fluid.aa-copyright').remove()
}

window.onload =  test()
