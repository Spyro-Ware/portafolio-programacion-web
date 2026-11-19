# Act Int 1 - Problema local: las filas en la cooperativa

Preparatoria 9, UdeG, Zapopan.

## El problema

En el receso, muchos alumnos van al mismo tiempo a la cooperativa. Se hacen filas largas, se pierde tiempo del descanso y algunos ya no alcanzan a comprar o a comer con calma.

La solución es una app para ver el menú y pedir por adelantado, sin hacer fila. El alumno pide desde su teléfono y solo va a recoger su pedido a la hora indicada.

## 1. Algoritmo

1. Abrir la app de la cooperativa en el teléfono.
2. Ver el menú del día, con los productos y los precios.
3. Elegir los productos que se quieren comprar.
4. Revisar el pedido y la cantidad total a pagar.
5. Confirmar el pedido y elegir la hora para recogerlo.
6. Pagar en la app o elegir pagar al recoger, según lo que permita la app.
7. Esperar la confirmación del pedido con la hora de entrega.
8. Llegar a la cooperativa a la hora indicada.
9. Mostrar el pedido en la app para recogerlo, sin hacer la fila normal.
10. Recibir el pedido y revisar que esté completo.

## 2. Diagrama de flujo

El diagrama completo está en la carpeta `03-diagrama-flujo-problema-social`, en el archivo `diagrama-flujo.svg`. También se explica paso por paso en `diagrama-flujo.md` de esa misma carpeta.

El diagrama sigue este orden: inicio, ver menú, decidir si pedir, pedir por adelantado, pagar, recoger y fin. Si el alumno no quiere pedir, el proceso termina después de ver el menú. Los bloques que se usan están en la carpeta `05-imagenes-bloques`: óvalo para inicio y fin, rectángulo para los pasos, rombo para la decisión y paralelogramo para ver el menú y mostrar el pedido.

## 3. Pseudocódigo

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
