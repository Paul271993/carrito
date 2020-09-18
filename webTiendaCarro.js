app.init = function(){
    //totalItems totalAmount
    var total = 0,
    items = 0
    
    var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
    
    if(undefined != cart.items && cart.items != null && cart.items != '' && cart.items.length > 0){
    _.forEach(cart.items, function(n, key) {
       items = (items + n.cant)
       total = total  + (n.cant * n.price)
    });
    
    }
    
    $('#totalItems').text(items)
    $('.totalAmount').text('$ '+total+ ' USD')
    
    }

    app.addtoCart = function(id){
        var l = Ladda.create( document.querySelector( '.prod-'+id ) );
        
        l.start();
        var productos = JSON.parse(localStorage.getItem('productos')),
        producto = _.find(productos,{ 'id' : id }),
        cant = 1
        if(cant <= producto.stock){
        if(undefined != producto){
        if(cant > 0){
        setTimeout(function(){
        var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []} ;
        app.searchProd(cart,producto.id,parseInt(cant),producto.name,producto.price,producto.img,producto.stock)
        l.stop();
        },2000)
        }else{
        alert('Solo se permiten cantidades mayores a cero')
        }
        }else{
        alert('Oops! algo malo ocurrió, inténtalo de nuevo más tarde')
        }
        }else{
        alert('No se pueden añadir más de este producto')
        }
        }



        app.getProducts = function(){
            var cart = (JSON.parse(localStorage.getItem('cart')) != null) ? JSON.parse(localStorage.getItem('cart')) : {items : []},
            msg = '',
            wrapper = $('.cart'),
            total = 0
            wrapper.html('')
            
            if(undefined == cart || null == cart || cart == '' || cart.items.length == 0){
            wrapper.html('<li>Tu canasta está vacía</li>');
            $('.cart').css('left','-400%')
            }else{
            var items = '';
            _.forEach(cart.items, function(n, key) {
            
               total = total  + (n.cant * n.price)
               items += '<li>'
               items += '<img src="'+n.img+'" />'
               items += '<h3 class="title">'+n.name+'<br><span class="price">'+n.cant+' x $ '+n.price+' USD</span> <button class="add" onclick="app.updateItem('+n.id+','+n.available+')"><i class="icon ion-minus-circled"></i></button> <button onclick="app.deleteProd('+n.id+')" ><i class="icon ion-close-circled"></i></button><div class="clearfix"></div></h3>'
               items += '</li>'
            });
            
            //agregar el total al carrito
            items += '<li id="total">Total : $ '+total+' USD <div id="submitForm"></div></li>'
            wrapper.html(items)
            $('.cart').css('left','-500%')
            }
            }


            app.deleteProd = function(id,remove){
                if(undefined != id && id > 0){
                
                if(remove == true){
                app.delete(id)
                }else{
                var conf = confirm('¿Deseas eliminar este producto?')
                if(conf){
                app.delete(id)
                }
                }
                
                }
                }