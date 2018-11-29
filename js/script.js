var area = document.getElementById('textarea');
var btn = document.getElementById('btn');
var list = document.getElementById('list');

btn.addEventListener('click', function() {
    var jsonArea = area.value;
    list.innerHTML = '';
        try {
            //console.log(JSON.parse(str));
            var objJSON = JSON.parse(jsonArea);
            var obj = {json: objJSON};

            for (var x in obj) {
                recursJson(x, obj[x], list)
            }

            function recursJson(key, value, block) {
                var packageBlock = document.createElement('div');
                var headerBlock = document.createElement('div');
                var childrenBlock = document.createElement('div');

                headerBlock.classList.add('header');
                headerBlock.innerHTML = key;
                packageBlock.appendChild(headerBlock);

                childrenBlock.classList.add('children');
    
                // if (Array.isArray(value)) {
                //             var span = document.createElement(span);
                //             span.innerHTML = 'array';
                //             headerBlock.appendChild(span);
                // }
    
                // if (value instanceof Array) {
                //             var span = document.createElement(span);
                //             span.innerHTML = 'array';
                //             headerBlock.appendChild(span);
                // } else if (typeof value === 'object') {
                //     var span = document.createElement(span);
                //             span.innerHTML = 'object';
                //             headerBlock.appendChild(span);
                // }
        
                for (var x in value) {
                    if (typeof value[x] !== 'object'){
                        var pBlock = document.createElement('p');
                        pBlock.innerHTML = `${x}: ${value[x]}`;
                        childrenBlock.appendChild(pBlock);
                    } else {
                        // if (Array.isArray(value[x])) {
                        //     var span = document.createElement(span);
                        //     span.innerHTML = 'array';
                        //     headerBlock.appendChild(span);
                        //     recursJson(x, value[x], childrenBlock);
                        // } else {
                        //     var span = document.createElement(span);
                        //     span.innerHTML = 'object';
                        //     headerBlock.appendChild(span)
                        //     recursJson(x, value[x], childrenBlock);
                        // }
                        recursJson(x, value[x], childrenBlock);
                    }
                }
                packageBlock.appendChild(childrenBlock);
                block.appendChild(packageBlock);
            }
    
            let showHideElements = document.querySelectorAll('.header');
            for (i = 0; i < showHideElements.length; i++) {
                showHideElements[i].addEventListener('click', showHideBlock)
            } 
    
            function showHideBlock(e) { 

                var parent = this.parentElement;
                if (parent.classList.contains('open')) {
                    parent.classList.remove('open');
			        parent.classList.add('closed');                    
                } else {
                    parent.classList.remove('closed');
			        parent.classList.add('open');
                }
            }

        } catch(e) {
            return false;
        }
})