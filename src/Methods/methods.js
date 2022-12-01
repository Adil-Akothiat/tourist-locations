const methods = {
    focus: (clickables)=> {
        clickables[0].classList.add('focus');
        clickables.forEach(clickable=> {
            clickable.addEventListener('click', function(){
                for(let clickable of clickables) clickable.classList.remove('focus');
                this.classList.add('focus');
            })
        });
    },
    srollEffect: (elements)=> {
        const scroll = ()=> {
            const {scrollY} = window;
            for(let element of elements) {
                const {offsetTop} = element;
                if (scrollY+250 >= offsetTop) {
                    element.classList.add('show')
                }
            }
        };
        scroll();
        window.onscroll = scroll;
    }
};

export default methods;