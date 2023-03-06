console.log('test')
window.onload = document.body.querySelector('div.container-fluid.aa-footer').remove()
window.onload = document.body.querySelector('div.container-fluid.aa-copyright').remove()

window.onload = function test(){
    document.body.querySelector('div.container-fluid.aa-footer').remove()
    document.body.querySelector('div.container-fluid.aa-copyright').remove()
}

test()
