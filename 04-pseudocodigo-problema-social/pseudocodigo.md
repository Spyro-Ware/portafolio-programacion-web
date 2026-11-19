# Pseudocódigo: pedido por adelantado en la cooperativa

Preparatoria 9, UdeG, Zapopan.

```text
Inicio
    Abrir la app de la cooperativa
    Mostrar el menú del día
    pedido = vacío
    total = 0
    quiere_pedir = preguntar "¿Quieres pedir algo?"

    Si quiere_pedir = sí Entonces
        Mientras el alumno quiera agregar productos
            Elegir un producto del menú
            Agregar el producto al pedido
            total = total + precio del producto
            Preguntar si quiere agregar otro producto
        Fin Mientras

        Mostrar el pedido y el total
        Elegir la hora para recoger el pedido
        Confirmar el pedido
        Pagar en la app o elegir pagar al recoger
        Mostrar la confirmación con la hora de entrega
        Llegar a la cooperativa a la hora indicada
        Mostrar el pedido para recogerlo
        Entregar el pedido
    SiNo
        Mostrar "No se hizo ningún pedido"
    Fin Si
Fin
```
